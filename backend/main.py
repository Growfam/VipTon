# main.py - VipTon Telegram Mini App
import os
import sys
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory, Response
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import logging

# Налаштування логування
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

# Завантажуємо змінні середовища
load_dotenv()


def create_app():
    """Factory для створення Flask додатку VipTon"""

    # Шляхи до файлів
    BASE_DIR = Path(__file__).resolve().parent.parent

    # React build folder
    STATIC_FOLDER = BASE_DIR / 'backend' / 'static'

    # Створюємо папку static якщо її немає
    STATIC_FOLDER.mkdir(exist_ok=True)

    app = Flask(__name__,
                static_folder=str(STATIC_FOLDER),
                static_url_path='')

    # Конфігурація
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'vipton-secure-secret-key-2025')
    app.config['JWT_SECRET'] = os.getenv('JWT_SECRET', 'vipton-secure-jwt-secret-key-2025')
    app.config['JWT_EXPIRATION'] = int(os.getenv('JWT_EXPIRATION', 86400))
    app.config['SUPABASE_URL'] = os.getenv('SUPABASE_URL')
    app.config['SUPABASE_SERVICE_KEY'] = os.getenv('SUPABASE_SERVICE_KEY')
    app.config['TELEGRAM_BOT_TOKEN'] = os.getenv('TELEGRAM_BOT_TOKEN')
    app.config['WEBAPP_URL'] = os.getenv('WEBAPP_URL', 'http://localhost:8080')
    app.config['ENVIRONMENT'] = os.getenv('ENVIRONMENT', 'development')

    # CORS налаштування
    allowed_origins = [
        app.config['WEBAPP_URL'],
        'https://web.telegram.org',
        'http://localhost:3000',  # Vite dev server
        'http://localhost:5173',  # Alternative Vite port
        'http://localhost:8080'
    ]

    # Додаємо Railway URL якщо є
    railway_url = os.getenv('RAILWAY_STATIC_URL')
    if railway_url:
        allowed_origins.append(f'https://{railway_url}')

    CORS(app,
         origins=allowed_origins,
         supports_credentials=True,
         allow_headers=["Content-Type", "Authorization", "X-Telegram-Init-Data"],
         methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
         max_age=3600)

    # Rate limiter
    redis_url = os.getenv('REDIS_URL', 'memory://')

    if redis_url.startswith('redis://'):
        try:
            import redis
            r = redis.from_url(redis_url, socket_connect_timeout=2)
            r.ping()
            app.config['RATELIMIT_STORAGE_URL'] = redis_url
            logger.info("✅ Redis connected for rate limiting")
        except Exception as e:
            logger.warning(f"⚠️ Redis connection failed: {e}, using memory storage")
            app.config['RATELIMIT_STORAGE_URL'] = 'memory://'
    else:
        app.config['RATELIMIT_STORAGE_URL'] = 'memory://'

    limiter = Limiter(
        app=app,
        key_func=get_remote_address,
        default_limits=["1000 per hour", "100 per minute"],
        storage_uri=app.config['RATELIMIT_STORAGE_URL']
    )

    # Ініціалізуємо базу даних
    from backend.core.database import init_db
    try:
        init_db(app)
        logger.info("✅ Database initialized")
    except Exception as e:
        logger.warning(f"⚠️ Database initialization warning: {e}")

    # After request handler
    @app.after_request
    def after_request(response):
        origin = request.headers.get('Origin')
        if origin in allowed_origins:
            response.headers['Access-Control-Allow-Origin'] = origin
            response.headers['Access-Control-Allow-Credentials'] = 'true'
        return response

    # Реєструємо blueprints
    from backend.auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    # =====================================
    # API ENDPOINTS
    # =====================================

    @app.route('/api/config', methods=['GET'])
    def get_config():
        """Отримати конфігурацію для фронтенду"""
        return jsonify({
            'success': True,
            'data': {
                'api_url': request.url_root.rstrip('/'),
                'webapp_url': app.config['WEBAPP_URL'],
                'environment': app.config['ENVIRONMENT'],
                'features': {
                    'vip': True,
                    'mining': True,
                    'referrals': True,
                    'tasks': True
                },
                'telegram_bot_username': os.getenv('BOT_USERNAME', 'vipton_bot'),
                'version': '1.0.0'
            }
        })

    @app.route('/api/health', methods=['GET'])
    def health_check():
        """Перевірка стану сервера"""
        return jsonify({
            'status': 'healthy',
            'service': 'VipTon Mini App',
            'version': '1.0.0',
            'timestamp': datetime.utcnow().isoformat()
        })

    @app.route('/api/stats', methods=['GET'])
    def get_stats():
        """Отримати загальну статистику"""
        try:
            from backend.core.database import get_db
            db = get_db()
            stats = db.get_stats()

            return jsonify({
                'success': True,
                'data': stats
            })
        except Exception as e:
            logger.error(f"Stats error: {e}")
            return jsonify({
                'success': False,
                'error': 'Failed to get stats'
            }), 500

    # =====================================
    # REACT APP SERVING
    # =====================================

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_react_app(path):
        """Serve React application"""

        # API routes should not be handled here
        if path.startswith('api/'):
            return jsonify({
                'success': False,
                'error': 'API endpoint not found',
                'code': 'NOT_FOUND'
            }), 404

        # Try to serve the file if it exists
        static_file = Path(app.static_folder) / path

        # Check if it's a static asset (js, css, images, etc)
        static_extensions = {'.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf',
                             '.eot'}

        if static_file.exists() and static_file.is_file():
            # Serve the actual file
            return send_from_directory(app.static_folder, path)
        elif path and '.' in path:
            # If file has extension but doesn't exist, return 404
            file_extension = Path(path).suffix.lower()
            if file_extension in static_extensions:
                return jsonify({
                    'success': False,
                    'error': f'Static file not found: {path}'
                }), 404

        # For all other routes, serve index.html (React Router will handle it)
        index_path = Path(app.static_folder) / 'index.html'

        if index_path.exists():
            return send_from_directory(app.static_folder, 'index.html')
        else:
            # If no build exists, show development message
            return """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>VipTon - Build Required</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                        background: #000;
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .container {
                        text-align: center;
                        padding: 20px;
                    }
                    .logo {
                        width: 80px;
                        height: 80px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 32px;
                        font-weight: 800;
                        color: #000;
                        margin: 0 auto 20px;
                    }
                    h1 { color: #FFD700; }
                    p { color: #8E8E93; }
                    code {
                        background: #1C1C1E;
                        padding: 2px 6px;
                        border-radius: 4px;
                        color: #FFD700;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">VT</div>
                    <h1>VipTon - Build Required</h1>
                    <p>React app not built yet. Please run:</p>
                    <p><code>cd frontend && npm install && npm run build</code></p>
                    <p style="margin-top: 20px; font-size: 12px;">
                        Environment: """ + app.config['ENVIRONMENT'] + """
                    </p>
                </div>
            </body>
            </html>
            """, 200

    # =====================================
    # ERROR HANDLERS
    # =====================================

    @app.errorhandler(404)
    def not_found(error):
        """Handle 404 errors"""
        # Check if it's an API request
        if request.path.startswith('/api/'):
            return jsonify({
                'success': False,
                'error': 'API endpoint not found',
                'code': 'NOT_FOUND',
                'path': request.path
            }), 404

        # For non-API routes, try to serve React app
        return serve_react_app('')

    @app.errorhandler(500)
    def internal_error(error):
        """Handle 500 errors"""
        logger.error(f"500 Error: {error}")
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'code': 'INTERNAL_ERROR'
        }), 500

    @app.errorhandler(429)
    def rate_limit_exceeded(error):
        """Handle rate limit errors"""
        return jsonify({
            'success': False,
            'error': 'Too many requests. Please try again later.',
            'code': 'RATE_LIMIT_EXCEEDED'
        }), 429

    # Custom error handlers для VipTon exceptions
    from backend.core.exceptions import VipTonException, handle_vipton_exception, APIException

    @app.errorhandler(VipTonException)
    def handle_vipton_error(error):
        return handle_vipton_exception(error)

    @app.errorhandler(APIException)
    def handle_api_error(error):
        return jsonify({
            'success': False,
            'error': error.message,
            'code': error.code,
            'details': error.details if hasattr(error, 'details') else None
        }), error.status_code

    # =====================================
    # DEVELOPMENT HELPERS
    # =====================================

    if app.config['ENVIRONMENT'] == 'development':
        @app.route('/api/debug/info', methods=['GET'])
        def debug_info():
            """Debug information (only in development)"""
            return jsonify({
                'environment': app.config['ENVIRONMENT'],
                'static_folder': str(app.static_folder),
                'static_exists': Path(app.static_folder).exists(),
                'index_exists': (Path(app.static_folder) / 'index.html').exists(),
                'webapp_url': app.config['WEBAPP_URL'],
                'cors_origins': allowed_origins,
                'routes': [str(rule) for rule in app.url_map.iter_rules()]
            })

    # Log startup information
    logger.info(f"""
    🚀 VipTon Server Configuration:
    - Environment: {app.config['ENVIRONMENT']}
    - Static Folder: {app.static_folder}
    - WebApp URL: {app.config['WEBAPP_URL']}
    - API Prefix: /api
    - CORS Origins: {allowed_origins}
    - Rate Limiting: {'Redis' if redis_url.startswith('redis://') else 'Memory'}
    """)

    return app


# Import datetime for health check
from datetime import datetime

# Створюємо додаток
app = create_app()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))

    print(f"""
    ╔══════════════════════════════════════╗
    ║         VipTon Server Starting       ║
    ╠══════════════════════════════════════╣
    ║  Environment: {app.config['ENVIRONMENT']:23s}║
    ║  Port: {port:30d}║
    ║  URL: http://localhost:{port:14d}║
    ╚══════════════════════════════════════╝
    """)

    app.run(
        host='0.0.0.0',
        port=port,
        debug=(app.config['ENVIRONMENT'] == 'development')
    )