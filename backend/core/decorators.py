# backend/core/decorators.py - VipTon Decorators
from functools import wraps
from flask import jsonify, request
from backend.core.cache import vipton_cache
import logging

logger = logging.getLogger(__name__)


def rate_limit(calls: int = 10, period: int = 60, scope: str = 'user'):
    """Rate limiter декоратор для VipTon"""

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Визначаємо ключ для rate limiting
            if scope == 'user':
                from backend.auth.jwt_service import get_current_user
                user = get_current_user()
                if not user:
                    identifier = request.remote_addr
                else:
                    identifier = user.get('id', request.remote_addr)
            elif scope == 'ip':
                identifier = request.remote_addr
            else:
                identifier = 'global'

            # Створюємо ключ
            rate_key = f"rate:{func.__name__}:{identifier}"

            # Перевіряємо ліміт
            if not vipton_cache.set_rate_limit(rate_key, calls, period):
                return jsonify({
                    'success': False,
                    'error': f'Rate limit exceeded. Maximum {calls} requests per {period} seconds.',
                    'code': 'RATE_LIMIT_EXCEEDED'
                }), 429

            return func(*args, **kwargs)

        return wrapper

    return decorator


def cache_result(ttl: int = 300, key_prefix: Optional[str] = None):
    """Кешування результату функції"""

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Будуємо ключ кешу
            if key_prefix:
                cache_key = key_prefix
            else:
                cache_key = f"func:{func.__module__}.{func.__name__}"

            # Додаємо аргументи до ключа
            for arg in args[1:]:  # Пропускаємо self/cls
                cache_key += f":{arg}"

            # Перевіряємо кеш
            cached = vipton_cache.get(cache_key)
            if cached is not None:
                logger.debug(f"Cache hit for {cache_key}")
                return cached

            # Виконуємо функцію
            result = func(*args, **kwargs)

            # Зберігаємо в кеш
            if result is not None:
                vipton_cache.set(cache_key, result, ttl)
                logger.debug(f"Cached result for {cache_key}")

            return result

        return wrapper

    return decorator


def admin_required(func):
    """Декоратор що вимагає адмін права"""
    from backend.auth.jwt_service import vipton_jwt_required

    @wraps(func)
    @vipton_jwt_required
    def wrapper(*args, **kwargs):
        user = request.current_user

        if not user or not user.get('is_admin'):
            return jsonify({
                'success': False,
                'error': 'Admin access required',
                'code': 'ADMIN_REQUIRED'
            }), 403

        return func(*args, **kwargs)

    return wrapper


def vip_required(func):
    """Декоратор що вимагає VIP статус"""
    from backend.auth.jwt_service import vipton_jwt_required

    @wraps(func)
    @vipton_jwt_required
    def wrapper(*args, **kwargs):
        user = request.current_user

        if not user or not user.get('is_vip'):
            return jsonify({
                'success': False,
                'error': 'VIP status required',
                'code': 'VIP_REQUIRED'
            }), 403

        return func(*args, **kwargs)

    return wrapper


from typing import Optional