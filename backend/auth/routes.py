# auth/routes.py - VipTon Authentication API Routes
from flask import Blueprint, request, jsonify
from datetime import datetime
from .services import VipTonAuthService
from .jwt_service import vipton_jwt_required, vipton_admin_required
from .models import VipTonUser

# Створюємо Blueprint для VipTon auth маршрутів
auth_bp = Blueprint('vipton_auth', __name__)


@auth_bp.route('/telegram', methods=['POST'])
def telegram_auth():
    """POST /api/auth/telegram - Аутентифікація через Telegram Web App"""
    try:
        print("🔐 VipTon Telegram auth request received")

        # Отримуємо дані з запиту
        data = request.get_json()
        if not data:
            return jsonify({
                'success': False,
                'error': 'Request body is required',
                'code': 'MISSING_BODY'
            }), 400

        init_data = data.get('initData')
        if not init_data:
            return jsonify({
                'success': False,
                'error': 'initData is required',
                'code': 'MISSING_INIT_DATA'
            }), 400

        print(f"📱 VipTon Processing auth for init_data length: {len(init_data)}")

        # Аутентифікуємо користувача
        success, user_data, jwt_token = VipTonAuthService.authenticate_telegram_user(init_data)

        if not success:
            return jsonify({
                'success': False,
                'error': 'Authentication failed',
                'code': 'AUTH_FAILED'
            }), 401

        print(f"✅ VipTon Auth successful for user: {user_data['telegram_id']}")

        return jsonify({
            'success': True,
            'message': 'Authentication successful',
            'data': {
                'token': jwt_token,
                'user': user_data,
                'expires_in': 86400,
                'service': 'VIPTON'
            }
        }), 200

    except Exception as e:
        print(f"💥 VipTon Auth endpoint error: {e}")
        return jsonify({
            'success': False,
            'error': 'Authentication failed',
            'code': 'INTERNAL_ERROR'
        }), 500


@auth_bp.route('/verify', methods=['GET'])
@vipton_jwt_required
def verify_token():
    """GET /api/auth/verify - Перевірка валідності JWT токену"""
    try:
        user_id = request.current_user_id

        # Отримуємо актуальні дані користувача
        user = VipTonUser.find_by_id(user_id)
        if not user:
            return jsonify({
                'success': False,
                'error': 'User not found',
                'code': 'USER_NOT_FOUND'
            }), 404

        if not user.is_active:
            return jsonify({
                'success': False,
                'error': 'User account is inactive',
                'code': 'USER_INACTIVE'
            }), 401

        if user.is_banned:
            return jsonify({
                'success': False,
                'error': 'User account is banned',
                'code': 'USER_BANNED'
            }), 403

        print(f"✅ VipTon Token verified for user: {user.telegram_id}")

        return jsonify({
            'success': True,
            'message': 'Token is valid',
            'data': {
                'user': user.to_dict(),
                'verified_at': datetime.utcnow().isoformat()
            }
        }), 200

    except Exception as e:
        print(f"💥 VipTon Token verification error: {e}")
        return jsonify({
            'success': False,
            'error': 'Token verification failed',
            'code': 'VERIFICATION_ERROR'
        }), 500


@auth_bp.route('/profile', methods=['GET'])
@vipton_jwt_required
def get_profile():
    """GET /api/auth/profile - Отримання профілю користувача"""
    try:
        user_id = request.current_user_id

        user = VipTonUser.find_by_id(user_id)
        if not user:
            return jsonify({
                'success': False,
                'error': 'User not found',
                'code': 'USER_NOT_FOUND'
            }), 404

        return jsonify({
            'success': True,
            'message': 'Profile retrieved successfully',
            'data': {
                'user': user.to_dict()
            }
        }), 200

    except Exception as e:
        print(f"💥 VipTon Get profile error: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to get profile',
            'code': 'PROFILE_ERROR'
        }), 500


@auth_bp.route('/profile', methods=['PUT'])
@vipton_jwt_required
def update_profile():
    """PUT /api/auth/profile - Оновлення профілю користувача"""
    try:
        user_id = request.current_user_id
        data = request.get_json()

        if not data:
            return jsonify({
                'success': False,
                'error': 'Request body is required',
                'code': 'MISSING_BODY'
            }), 400

        user = VipTonUser.find_by_id(user_id)
        if not user:
            return jsonify({
                'success': False,
                'error': 'User not found',
                'code': 'USER_NOT_FOUND'
            }), 404

        # Дозволені поля для оновлення
        allowed_fields = ['first_name', 'last_name', 'username', 'language_code', 'settings']
        updated_fields = []

        for field in allowed_fields:
            if field in data:
                setattr(user, field, data[field])
                updated_fields.append(field)

        if not updated_fields:
            return jsonify({
                'success': False,
                'error': 'No valid fields to update',
                'code': 'NO_FIELDS'
            }), 400

        # Зберігаємо зміни
        if user.save():
            print(f"📝 VipTon Profile updated for user {user.telegram_id}: {updated_fields}")

            return jsonify({
                'success': True,
                'message': 'Profile updated successfully',
                'data': {
                    'user': user.to_dict(),
                    'updated_fields': updated_fields
                }
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to save profile',
                'code': 'SAVE_ERROR'
            }), 500

    except Exception as e:
        print(f"💥 VipTon Update profile error: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to update profile',
            'code': 'UPDATE_ERROR'
        }), 500


@auth_bp.route('/vip-status', methods=['GET'])
@vipton_jwt_required
def get_vip_status():
    """GET /api/auth/vip-status - Отримання VIP статусу"""
    try:
        user_id = request.current_user_id

        user = VipTonUser.find_by_id(user_id)
        if not user:
            return jsonify({
                'success': False,
                'error': 'User not found',
                'code': 'USER_NOT_FOUND'
            }), 404

        vip_info = {
            'is_vip': user.is_vip(),
            'vip_level': user.vip_level,
            'vip_until': user.vip_until,
            'days_left': 0
        }

        # Рахуємо скільки днів залишилось
        if user.vip_until:
            vip_until = user.vip_until
            if isinstance(vip_until, str):
                vip_until = datetime.fromisoformat(vip_until.replace('Z', '+00:00'))

            delta = vip_until - datetime.utcnow()
            if delta.total_seconds() > 0:
                vip_info['days_left'] = delta.days

        return jsonify({
            'success': True,
            'data': vip_info
        }), 200

    except Exception as e:
        print(f"💥 VipTon VIP status error: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to get VIP status',
            'code': 'VIP_ERROR'
        }), 500


# Admin endpoints
@auth_bp.route('/admin/users', methods=['GET'])
@vipton_admin_required
def admin_get_users():
    """GET /api/auth/admin/users - Отримати список користувачів (тільки адмін)"""
    try:
        from backend.core.database import get_db
        db = get_db()

        # Отримуємо параметри пагінації
        page = int(request.args.get('page', 1))
        limit = int(request.args.get('limit', 50))
        offset = (page - 1) * limit

        # Отримуємо користувачів
        result = db.table('users') \
            .select('*') \
            .order('created_at', desc=True) \
            .range(offset, offset + limit - 1) \
            .execute()

        users = [VipTonUser(**user_data).to_dict() for user_data in result.data]

        return jsonify({
            'success': True,
            'data': {
                'users': users,
                'page': page,
                'limit': limit
            }
        }), 200

    except Exception as e:
        print(f"💥 Admin users error: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to get users',
            'code': 'ADMIN_ERROR'
        }), 500