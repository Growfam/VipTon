# backend/core/cache.py - VipTon Cache Manager
import os
import json
import redis
from typing import Any, Optional, Dict, List
from datetime import timedelta
import logging
import pickle

logger = logging.getLogger(__name__)


class VipTonCacheManager:
    """Redis cache manager для VipTon"""

    # Префікси для кешу
    PREFIX_USER = "vipton:user:"
    PREFIX_VIP = "vipton:vip:"
    PREFIX_MINER = "vipton:miner:"
    PREFIX_CLAIM = "vipton:claim:"
    PREFIX_LOCK = "vipton:lock:"
    PREFIX_RATE = "vipton:rate:"

    # TTL конфігурації (в секундах)
    TTL_CONFIG = {
        'default': 300,  # 5 хвилин
        'user': 60,  # 1 хвилина
        'vip_status': 30,  # 30 секунд
        'miner': 120,  # 2 хвилини
        'claim': 60,  # 1 хвилина
        'lock': 30,  # 30 секунд
        'rate_limit': 60,  # 1 хвилина
    }

    def __init__(self):
        redis_url = os.getenv('REDIS_URL', 'redis://localhost:6379/0')

        try:
            if redis_url.startswith('redis://'):
                self.client = redis.from_url(
                    redis_url,
                    decode_responses=False,
                    socket_connect_timeout=2
                )
                self.client.ping()
                logger.info("✅ VipTon Redis connected")
            else:
                self.client = None
                logger.warning("⚠️ Redis URL not configured - caching disabled")
        except Exception as e:
            logger.warning(f"⚠️ Redis connection failed: {e} - caching disabled")
            self.client = None

    def _serialize(self, value: Any) -> bytes:
        """Серіалізує значення"""
        try:
            return pickle.dumps(value)
        except:
            return json.dumps(value).encode('utf-8')

    def _deserialize(self, data: bytes) -> Any:
        """Десеріалізує значення"""
        if not data:
            return None
        try:
            return pickle.loads(data)
        except:
            try:
                return json.loads(data.decode('utf-8'))
            except:
                return None

    def get(self, key: str, default: Any = None) -> Optional[Any]:
        """Отримує значення з кешу"""
        if not self.client:
            return default

        try:
            value = self.client.get(key)
            if value:
                return self._deserialize(value)
            return default
        except Exception as e:
            logger.error(f"Redis get error for key {key}: {e}")
            return default

    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> bool:
        """Зберігає значення в кеш"""
        if not self.client:
            return False

        try:
            if ttl is None:
                ttl = self.TTL_CONFIG.get('default', 300)

            serialized = self._serialize(value)
            return self.client.setex(key, ttl, serialized)
        except Exception as e:
            logger.error(f"Redis set error for key {key}: {e}")
            return False

    def delete(self, *keys: str) -> int:
        """Видаляє ключі з кешу"""
        if not self.client:
            return 0

        try:
            return self.client.delete(*keys)
        except Exception as e:
            logger.error(f"Redis delete error: {e}")
            return 0

    def exists(self, key: str) -> bool:
        """Перевіряє чи існує ключ"""
        if not self.client:
            return False

        try:
            return self.client.exists(key) > 0
        except:
            return False

    def incr(self, key: str, amount: int = 1) -> int:
        """Інкрементує значення"""
        if not self.client:
            return 0

        try:
            return self.client.incrby(key, amount)
        except Exception as e:
            logger.error(f"Redis incr error: {e}")
            return 0

    def expire(self, key: str, ttl: int) -> bool:
        """Встановлює TTL для ключа"""
        if not self.client:
            return False

        try:
            return self.client.expire(key, ttl)
        except:
            return False

    def ttl(self, key: str) -> int:
        """Отримує TTL ключа"""
        if not self.client:
            return -2

        try:
            return self.client.ttl(key)
        except:
            return -2

    # VipTon специфічні методи

    def cache_user(self, user_id: int, user_data: Dict, ttl: Optional[int] = None) -> bool:
        """Кешує дані користувача"""
        key = f"{self.PREFIX_USER}{user_id}"
        return self.set(key, user_data, ttl or self.TTL_CONFIG['user'])

    def get_user(self, user_id: int) -> Optional[Dict]:
        """Отримує дані користувача з кешу"""
        key = f"{self.PREFIX_USER}{user_id}"
        return self.get(key)

    def invalidate_user(self, user_id: int) -> int:
        """Інвалідує весь кеш користувача"""
        if not self.client:
            return 0

        patterns = [
            f"{self.PREFIX_USER}{user_id}",
            f"{self.PREFIX_VIP}{user_id}*",
            f"{self.PREFIX_MINER}{user_id}*",
            f"{self.PREFIX_CLAIM}{user_id}*",
        ]

        count = 0
        for pattern in patterns:
            try:
                keys = list(self.client.scan_iter(match=pattern, count=100))
                if keys:
                    count += self.client.delete(*keys)
            except:
                pass

        return count

    def set_rate_limit(self, key: str, max_requests: int, window: int) -> bool:
        """Встановлює rate limit"""
        if not self.client:
            return True  # Якщо немає Redis - не блокуємо

        full_key = f"{self.PREFIX_RATE}{key}"

        try:
            current = self.client.get(full_key)
            if current is None:
                self.client.setex(full_key, window, 1)
                return True

            current_count = int(current)
            if current_count >= max_requests:
                return False

            self.client.incr(full_key)
            return True

        except Exception as e:
            logger.error(f"Rate limit error: {e}")
            return True  # При помилці - не блокуємо


# Глобальний екземпляр
vipton_cache = VipTonCacheManager()