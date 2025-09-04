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
    FRONTEND_FOLDER = BASE_DIR / 'frontend'
    PAGES_FOLDER = FRONTEND_FOLDER / 'pages'

    app = Flask(__name__,
                static_folder=str(FRONTEND_FOLDER),
                static_url_path='/static')

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
        'http://localhost:3000',
        'http://localhost:8080'
    ]

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
        except:
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
        logger.warning(f"Database initialization warning: {e}")

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

    # Основні роути

    @app.route('/')
    def index():
        """Головна сторінка"""
        try:
            home_path = PAGES_FOLDER / 'home' / 'home.html'

            if home_path.exists():
                with open(home_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Додаємо конфігурацію
                config_script = f"""
                <script>
                    window.VIPTON_CONFIG = {{
                        API_URL: '{request.url_root.rstrip("/")}',
                        WEBAPP_URL: '{app.config["WEBAPP_URL"]}',
                        ENVIRONMENT: '{app.config["ENVIRONMENT"]}'
                    }};
                </script>
                """
                content = content.replace('</head>', f'{config_script}</head>')

                return Response(content, mimetype='text/html; charset=utf-8')
            else:
                return jsonify({'error': 'Home page not found'}), 404

        except Exception as e:
            logger.error(f"Error serving home page: {e}")
            return jsonify({'error': str(e)}), 500

    @app.route('/home')
    @app.route('/home/')
    def home_page():
        """Редірект на головну"""
        return index()

    # API endpoints

    @app.route('/api/config', methods=['GET'])
    def get_config():
        """Отримати конфігурацію"""
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
                }
            }
        })

    @app.route('/api/health', methods=['GET'])
    def health_check():
        """Перевірка стану сервера"""
        return jsonify({
            'status': 'healthy',
            'service': 'VipTon Mini App',
            'version': '1.0.0'
        })

    # Обробка статичних файлів
    @app.route('/pages/<path:filename>')
    def serve_pages(filename):
        """Сервірування файлів з pages"""
        return send_from_directory(str(PAGES_FOLDER), filename)

    @app.route('/assets/<path:filename>')
    def serve_assets(filename):
        """Сервірування assets"""
        assets_path = FRONTEND_FOLDER / 'assets'
        return send_from_directory(str(assets_path), filename)

    @app.route('/components/<path:filename>')
    def serve_components(filename):
        """Сервірування компонентів"""
        # Спробуємо знайти в home/components
        home_components = PAGES_FOLDER / 'home' / 'components'
        if (home_components / filename).exists():
            return send_from_directory(str(home_components), filename)

        # Якщо не знайдено - шукаємо в shared
        shared_path = FRONTEND_FOLDER / 'shared'
        return send_from_directory(str(shared_path), filename)

    @app.route('/services/<path:filename>')
    def serve_services(filename):
        """Сервірування сервісів"""
        # Спробуємо знайти в home/services
        home_services = PAGES_FOLDER / 'home' / 'services'
        if (home_services / filename).exists():
            return send_from_directory(str(home_services), filename)

        # Якщо не знайдено - шукаємо в shared
        shared_path = FRONTEND_FOLDER / 'shared'
        return send_from_directory(str(shared_path), filename)

    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        if request.path.startswith('/api/'):
            return jsonify({
                'success': False,
                'error': 'API endpoint not found',
                'code': 'NOT_FOUND'
            }), 404
        return index()  # Повертаємо головну сторінку для всіх інших 404

    @app.errorhandler(500)
    def internal_error(error):
        logger.error(f"500 Error: {error}")
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'code': 'INTERNAL_ERROR'
        }), 500

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
            'code': error.code
        }), error.status_code

    return app


# Створюємо додаток
app = create_app()

if __name__ == '__main__':
    import os

    # Отримуємо порт з оточення
    port = int(os.environ.get('PORT', 8080))

    print(f"🚀 Starting VipTon...")
    print(f"📍 PORT from environment: {os.environ.get('PORT', 'NOT SET')}")
    print(f"🌐 Running on port: {port}")

    app.run(
        host='0.0.0.0',
        port=port,
        debug=False
    )