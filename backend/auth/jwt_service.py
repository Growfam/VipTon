# auth/jwt_service.py - VipTon JWT Token Management
import os
import jwt
from datetime import datetime, timedelta
from typing import Dict, Optional, Any
from functools import wraps
from flask import request, jsonify, g
import logging

logger = logging.getLogger(__name__)


class VipTonJWTService:
    """Сервіс для управління JWT токенами в VipTon"""

    def __init__(self):
        self.secret_key = os.getenv('JWT_SECRET', 'vipton-secure-jwt-secret-key-2025')
        self.algorithm = os.getenv('JWT_ALGORITHM', 'HS256')
        self.expiration_seconds = int(os.getenv('JWT_EXPIRATION', 86400))  # 24 години

        if len(self.secret_key) < 32:
            logger.warning("⚠️ VipTon Warning: JWT_SECRET is too short, use at least 32 characters")

        logger.info(f"✅ VipTon JWT Service initialized - Expiration: {self.expiration_seconds}s")

    def generate_token(self, user_id: int, additional_claims: Dict = None) -> str:
        """Генерує JWT токен для VipTon користувача"""
        try:
            now = datetime.utcnow()

            payload = {
                'user_id': user_id,
                'id': user_id,  # Для сумісності
                'iat': now,
                'exp': now + timedelta(seconds=self.expiration_seconds),
                'iss': 'vipton-app',
                'type': 'access',
                'service': 'VIPTON'
            }

            # Додаємо додаткові claims
            if additional_claims:
                # Переконуємося що telegram_id є string
                if 'telegram_id' in additional_claims and additional_claims['telegram_id'] is not None:
                    additional_claims['telegram_id'] = str(additional_claims['telegram_id'])

                payload.update(additional_claims)

            token = jwt.encode(payload, self.secret_key, algorithm=self.algorithm)

            logger.info(f"✅ VipTon JWT token generated for user {user_id}")
            return token

        except Exception as e:
            logger.error(f"❌ VipTon JWT generation error: {e}")
            raise

    def decode_token(self, token: str) -> Optional[Dict[str, Any]]:
        """Декодує та валідує JWT токен"""
        try:
            payload = jwt.decode(
                token,
                self.secret_key,
                algorithms=[self.algorithm]
            )

            # Перевіряємо тип токену
            if payload.get('type') != 'access':
                logger.warning("❌ VipTon: Invalid token type")
                return None

            # Перевірка issuer
            if payload.get('iss') != 'vipton-app':
                logger.warning("❌ VipTon: Invalid token issuer")
                return None

            # Переконуємося що telegram_id є string
            if 'telegram_id' in payload and payload['telegram_id'] is not None:
                payload['telegram_id'] = str(payload['telegram_id'])

            logger.debug(f"✅ JWT decoded successfully for user_id: {payload.get('user_id')}")
            return payload

        except jwt.ExpiredSignatureError:
            logger.warning("❌ VipTon JWT token has expired")
            return None
        except jwt.InvalidTokenError as e:
            logger.warning(f"❌ VipTon Invalid JWT token: {e}")
            return None
        except Exception as e:
            logger.error(f"❌ VipTon JWT decode error: {e}")
            return None

    def extract_token_from_header(self, auth_header: str) -> Optional[str]:
        """Витягує токен з Authorization header"""
        if not auth_header:
            return None

        if not auth_header.startswith('Bearer '):
            return None

        return auth_header[7:]  # Видаляємо "Bearer "


# Глобальний екземпляр
vipton_jwt_service = VipTonJWTService()


def vipton_jwt_required(f):
    """Декоратор для захисту endpoints JWT токеном в VipTon"""

    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            # Отримуємо Authorization header
            auth_header = request.headers.get('Authorization')

            if not auth_header:
                return jsonify({
                    'success': False,
                    'error': 'Authorization header missing',
                    'code': 'AUTH_HEADER_MISSING',
                    'service': 'VIPTON'
                }), 401

            # Витягуємо токен
            token = vipton_jwt_service.extract_token_from_header(auth_header)
            if not token:
                return jsonify({
                    'success': False,
                    'error': 'Invalid authorization header format. Use: Bearer <token>',
                    'code': 'INVALID_AUTH_HEADER',
                    'service': 'VIPTON'
                }), 401

            # Декодуємо токен
            payload = vipton_jwt_service.decode_token(token)
            if not payload:
                return jsonify({
                    'success': False,
                    'error': 'Invalid or expired token',
                    'code': 'INVALID_TOKEN',
                    'service': 'VIPTON'
                }), 401

            # Додаємо дані до request
            request.current_user_id = payload['user_id']
            request.vipton_jwt_payload = payload

            # Переконуємося що telegram_id є string
            telegram_id = payload.get('telegram_id', payload['user_id'])
            if telegram_id is not None:
                telegram_id = str(telegram_id)

            # Додаємо current_user
            request.current_user = {
                'id': payload['user_id'],
                'user_id': payload['user_id'],
                'telegram_id': telegram_id,
                'vip_level': payload.get('vip_level', 0),
                'is_vip': payload.get('is_vip', False),
                'is_admin': payload.get('is_admin', False),
                **payload
            }

            # Також зберігаємо в g
            g.current_user = request.current_user

            logger.debug(f"🔓 JWT auth successful for user_id: {payload['user_id']}")

            return f(*args, **kwargs)

        except Exception as e:
            logger.error(f"❌ VipTon JWT middleware error: {e}")
            return jsonify({
                'success': False,
                'error': 'Authentication failed',
                'code': 'AUTH_FAILED',
                'service': 'VIPTON'
            }), 401

    return decorated_function


def vipton_admin_required(f):
    """Декоратор для endpoints які вимагають адмін доступ"""

    @wraps(f)
    @vipton_jwt_required
    def decorated_function(*args, **kwargs):
        # Перевіряємо чи користувач адмін
        if not request.current_user.get('is_admin'):
            return jsonify({
                'success': False,
                'error': 'Admin access required',
                'code': 'ADMIN_REQUIRED',
                'service': 'VIPTON'
            }), 403

        return f(*args, **kwargs)

    return decorated_function


def get_current_user() -> Optional[Dict[str, Any]]:
    """Отримати поточного авторизованого користувача"""
    if hasattr(g, 'current_user') and g.current_user:
        return g.current_user

    if hasattr(request, 'current_user') and request.current_user:
        return request.current_user

    return None


# Експортуємо все необхідне
__all__ = [
    'VipTonJWTService',
    'vipton_jwt_service',
    'vipton_jwt_required',
    'vipton_admin_required',
    'get_current_user'
]