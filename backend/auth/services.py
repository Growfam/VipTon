# auth/services.py - VipTon Authentication Services
import os
from typing import Dict, Optional, Tuple, Any
from datetime import datetime
from .telegram_auth import vipton_telegram_auth
from .jwt_service import vipton_jwt_service
from .models import VipTonUser
import logging

logger = logging.getLogger(__name__)


class VipTonAuthService:
    """Сервіс для обробки всіх операцій аутентифікації в VipTon"""

    @staticmethod
    def authenticate_telegram_user(init_data: str) -> Tuple[bool, Optional[Dict[str, Any]], Optional[str]]:
        """Аутентифікує користувача через Telegram Web App"""
        try:
            logger.info(f"🔐 VipTon: Starting Telegram authentication...")

            # Перевіряємо підпис Telegram
            is_valid, telegram_data = vipton_telegram_auth.verify_init_data(init_data)

            if not is_valid or not telegram_data:
                logger.error("❌ VipTon: Invalid Telegram data")
                return False, None, None

            logger.info(f"✅ VipTon: Telegram signature verified for user {telegram_data.get('id')}")

            # Переконуємося що telegram_id є string
            telegram_id = telegram_data.get('id')
            if telegram_id is None:
                logger.error("❌ VipTon: No telegram ID in auth data")
                return False, None, None

            telegram_id_str = str(telegram_id)

            # Шукаємо користувача в базі
            user = VipTonUser.find_by_telegram_id(telegram_id_str)

            if user:
                # Оновлюємо дані існуючого користувача
                logger.info(f"👤 VipTon: Existing user found: {user.first_name}")
                user = VipTonAuthService._update_existing_user(user, telegram_data)
            else:
                # Створюємо нового користувача
                logger.info(f"🆕 VipTon: Creating new user: {telegram_data.get('first_name', 'Unknown')}")

                referral_code = vipton_telegram_auth.extract_referral_code(init_data)
                user = VipTonUser.create_from_telegram(telegram_data, referral_code)

                # Бонус для нового користувача
                if user and referral_code:
                    VipTonAuthService._process_referral_bonus(user, referral_code)

            if not user:
                logger.error("❌ VipTon: Failed to create/update user")
                return False, None, None

            # Перевіряємо чи не забанений
            if user.is_banned:
                logger.warning(f"🚫 VipTon: Banned user tried to login: {user.telegram_id}")
                return False, None, None

            # Генеруємо JWT токен
            jwt_token = vipton_jwt_service.generate_token(
                user_id=user.id,
                additional_claims={
                    'telegram_id': str(user.telegram_id),
                    'is_vip': user.is_vip(),
                    'vip_level': user.vip_level,
                    'is_admin': user.is_admin(),
                    'is_premium': user.is_premium,
                    'service_type': 'VIPTON'
                }
            )

            logger.info(f"🎯 VipTon: Authentication successful for user {user.telegram_id}")

            return True, user.to_dict(), jwt_token

        except Exception as e:
            logger.error(f"💥 VipTon: Authentication error: {e}")
            return False, None, None

    @staticmethod
    def _update_existing_user(user: VipTonUser, telegram_data: Dict[str, Any]) -> VipTonUser:
        """Оновлює дані існуючого користувача"""
        try:
            user.username = telegram_data.get('username', user.username)
            user.first_name = telegram_data.get('first_name', user.first_name)
            user.last_name = telegram_data.get('last_name', user.last_name)
            user.photo_url = telegram_data.get('photo_url', user.photo_url)
            user.language_code = telegram_data.get('language_code', user.language_code)
            user.is_premium = telegram_data.get('is_premium', user.is_premium)

            # Оновлюємо час логіну
            user.last_login = datetime.utcnow()
            user.last_activity = datetime.utcnow()

            # Оновлюємо статистику
            if 'login_count' in user.stats:
                user.stats['login_count'] += 1
            else:
                user.stats['login_count'] = 1

            user.save()
            logger.info(f"✅ VipTon: Updated existing user: {user.telegram_id}")
            return user

        except Exception as e:
            logger.error(f"❌ VipTon: Error updating existing user: {e}")
            return user

    @staticmethod
    def _process_referral_bonus(user: VipTonUser, referral_code: str) -> bool:
        """Обробляє реферальний бонус"""
        try:
            # Знаходимо реферера
            referrer = VipTonUser.find_by_referral_code(referral_code)
            if not referrer:
                logger.warning(f"❌ VipTon: Referrer not found for code: {referral_code}")
                return False

            # Оновлюємо статистику реферера
            from backend.core.database import get_db
            db = get_db()

            db.table('users').update({
                'total_referrals': referrer.total_referrals + 1
            }).eq('id', referrer.id).execute()

            logger.info(
                f"🎁 VipTon: Referral processed - Referrer: {referrer.telegram_id}, New user: {user.telegram_id}")
            return True

        except Exception as e:
            logger.error(f"❌ VipTon: Error processing referral bonus: {e}")
            return False