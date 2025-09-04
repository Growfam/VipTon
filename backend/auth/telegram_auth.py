# auth/telegram_auth.py - VipTon Telegram Web App Authentication
import os
import hmac
import hashlib
import json
from datetime import datetime
from urllib.parse import unquote, parse_qsl
from typing import Tuple, Optional, Dict, Any
import logging

logger = logging.getLogger(__name__)


class VipTonTelegramAuth:
    """Клас для обробки Telegram Web App аутентифікації для VipTon"""

    def __init__(self):
        self.bot_token = os.getenv('TELEGRAM_BOT_TOKEN')
        if not self.bot_token:
            raise ValueError("TELEGRAM_BOT_TOKEN not found in environment variables")
        logger.info(f"✅ VipTon Telegram Auth initialized with bot: {os.getenv('BOT_USERNAME', 'unknown')}")

    def verify_init_data(self, init_data: str) -> Tuple[bool, Optional[Dict[str, Any]]]:
        """Перевіряє автентичність init_data від Telegram Web App"""
        try:
            if not init_data:
                logger.error("❌ VipTon: Empty init_data")
                return False, None

            # Парсимо URL-encoded дані
            parsed_data = dict(parse_qsl(init_data, keep_blank_values=True))

            # Витягуємо хеш
            received_hash = parsed_data.pop('hash', None)
            if not received_hash:
                logger.error("❌ VipTon: No hash found in init_data")
                return False, None

            # Створюємо секретний ключ згідно документації Telegram
            secret_key = hmac.new(
                key="WebAppData".encode('utf-8'),
                msg=self.bot_token.encode('utf-8'),
                digestmod=hashlib.sha256
            ).digest()

            # Створюємо data-check-string
            data_check_array = []
            for key in sorted(parsed_data.keys()):
                data_check_array.append(f"{key}={parsed_data[key]}")

            data_check_string = '\n'.join(data_check_array)

            # Обчислюємо хеш
            calculated_hash = hmac.new(
                key=secret_key,
                msg=data_check_string.encode('utf-8'),
                digestmod=hashlib.sha256
            ).hexdigest()

            # Порівнюємо хеші
            is_valid = hmac.compare_digest(received_hash, calculated_hash)

            if not is_valid:
                logger.error(f"❌ VipTon: Hash mismatch")
                return False, None

            # Перевіряємо термін дії
            auth_date = parsed_data.get('auth_date')
            if auth_date:
                try:
                    auth_timestamp = int(auth_date)
                    current_timestamp = int(datetime.utcnow().timestamp())

                    # Перевіряємо що дані не старше ніж 24 години
                    if current_timestamp - auth_timestamp > 86400:
                        logger.warning("❌ VipTon: Init data is too old (>24 hours)")
                        return False, None

                except ValueError:
                    logger.error("❌ VipTon: Invalid auth_date format")
                    return False, None

            # Витягуємо дані користувача
            user_data = self._extract_user_data(parsed_data)
            if not user_data:
                logger.error("❌ VipTon: No valid user data found")
                return False, None

            logger.info(f"✅ VipTon: Telegram auth successful for user: {user_data.get('id')}")
            return True, user_data

        except Exception as e:
            logger.error(f"💥 VipTon: Telegram auth error: {e}")
            return False, None

    def _extract_user_data(self, parsed_data: Dict[str, str]) -> Optional[Dict[str, Any]]:
        """Витягує дані користувача"""
        try:
            if 'user' not in parsed_data:
                logger.error("❌ VipTon: No 'user' field in parsed data")
                return None

            # Декодуємо JSON з user даними
            user_json = unquote(parsed_data['user'])
            user_data = json.loads(user_json)

            # Валідуємо обов'язкові поля
            if 'id' not in user_data:
                logger.error("❌ VipTon: No 'id' in user data")
                return None

            # Нормалізуємо дані
            normalized_data = {
                'id': str(user_data['id']),  # ЗАВЖДИ конвертуємо в string
                'first_name': user_data.get('first_name', ''),
                'last_name': user_data.get('last_name', ''),
                'username': user_data.get('username', ''),
                'language_code': user_data.get('language_code', 'en'),
                'is_premium': user_data.get('is_premium', False),
                'photo_url': user_data.get('photo_url', ''),
            }

            # Додаємо start_param якщо є
            if 'start_param' in parsed_data:
                normalized_data['start_param'] = parsed_data['start_param']

            if 'auth_date' in parsed_data:
                normalized_data['auth_date'] = int(parsed_data['auth_date'])

            return normalized_data

        except json.JSONDecodeError as e:
            logger.error(f"❌ VipTon: JSON decode error in user data: {e}")
            return None
        except Exception as e:
            logger.error(f"❌ VipTon: Error extracting user data: {e}")
            return None

    def extract_referral_code(self, init_data: str) -> Optional[str]:
        """Витягує реферальний код з init_data"""
        try:
            parsed_data = dict(parse_qsl(init_data))
            start_param = parsed_data.get('start_param', '')

            # Перевіряємо чи start_param є реферальним кодом
            if start_param and (start_param.startswith('VIP') or len(start_param) >= 6):
                logger.info(f"🔗 VipTon: Referral code found: {start_param}")
                return start_param

            return None

        except Exception as e:
            logger.error(f"❌ VipTon: Error extracting referral code: {e}")
            return None


# Глобальний екземпляр
vipton_telegram_auth = VipTonTelegramAuth()