# auth/models.py - VipTon User Model
import os
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from backend.core.database import get_db
import logging

logger = logging.getLogger(__name__)


class VipTonUser:
    """Модель користувача для VipTon"""

    def __init__(self, **kwargs):
        # Primary key
        self.id = kwargs.get('id')

        # Telegram data (telegram_id як TEXT)
        self.telegram_id = str(kwargs.get('telegram_id')) if kwargs.get('telegram_id') else None
        self.username = kwargs.get('username', '')
        self.first_name = kwargs.get('first_name', '')
        self.last_name = kwargs.get('last_name', '')
        self.photo_url = kwargs.get('photo_url', '')
        self.language_code = kwargs.get('language_code', 'en')

        # Баланси
        self.ton_balance = float(kwargs.get('ton_balance', 0))

        # VIP
        self.vip_until = kwargs.get('vip_until')
        self.vip_level = kwargs.get('vip_level', 0)

        # Реферальна система
        self.referral_code = kwargs.get('referral_code')
        self.referred_by_id = kwargs.get('referred_by_id')
        self.total_referrals = kwargs.get('total_referrals', 0)
        self.referral_earnings = float(kwargs.get('referral_earnings', 0))

        # Статистика
        self.total_earned = float(kwargs.get('total_earned', 0))
        self.total_spent = float(kwargs.get('total_spent', 0))

        # Системні
        self.is_active = kwargs.get('is_active', True)
        self.is_premium = kwargs.get('is_premium', False)
        self.is_banned = kwargs.get('is_banned', False)
        self.created_at = kwargs.get('created_at')
        self.updated_at = kwargs.get('updated_at')
        self.last_login = kwargs.get('last_login')
        self.last_activity = kwargs.get('last_activity')

        # Settings
        self.settings = kwargs.get('settings', {})
        self.stats = kwargs.get('stats', {})

    @classmethod
    def find_by_telegram_id(cls, telegram_id: Any) -> Optional['VipTonUser']:
        """Знаходить користувача по Telegram ID"""
        try:
            db = get_db()
            telegram_id_str = str(telegram_id)

            result = db.table('users').select('*').eq('telegram_id', telegram_id_str).execute()

            if result.data:
                logger.info(f"✅ Found user with telegram_id: {telegram_id_str}")
                return cls(**result.data[0])

            logger.info(f"❌ User not found with telegram_id: {telegram_id_str}")
            return None

        except Exception as e:
            logger.error(f"❌ Error finding user by telegram_id {telegram_id}: {e}")
            return None

    @classmethod
    def find_by_id(cls, user_id: int) -> Optional['VipTonUser']:
        """Знаходить користувача по ID"""
        try:
            db = get_db()
            result = db.table('users').select('*').eq('id', int(user_id)).execute()

            if result.data:
                return cls(**result.data[0])
            return None

        except Exception as e:
            logger.error(f"❌ Error finding user by id {user_id}: {e}")
            return None

    def save(self) -> bool:
        """Зберігає користувача в БД"""
        try:
            db = get_db()

            user_data = {
                'telegram_id': str(self.telegram_id),
                'username': self.username,
                'first_name': self.first_name,
                'last_name': self.last_name,
                'photo_url': self.photo_url,
                'language_code': self.language_code,
                'ton_balance': self.ton_balance,
                'vip_until': self.vip_until,
                'vip_level': self.vip_level,
                'referral_code': self.referral_code,
                'referred_by_id': self.referred_by_id,
                'total_referrals': self.total_referrals,
                'referral_earnings': self.referral_earnings,
                'total_earned': self.total_earned,
                'total_spent': self.total_spent,
                'is_active': self.is_active,
                'is_premium': self.is_premium,
                'is_banned': self.is_banned,
                'last_login': datetime.utcnow().isoformat(),
                'last_activity': datetime.utcnow().isoformat(),
                'settings': self.settings,
                'stats': self.stats
            }

            # Видаляємо None значення
            user_data = {k: v for k, v in user_data.items() if v is not None}

            if self.id:
                # Оновлюємо
                result = db.table('users').update(user_data).eq('id', int(self.id)).execute()
            else:
                # Створюємо нового
                result = db.table('users').insert(user_data).execute()
                if result.data:
                    self.id = result.data[0]['id']
                    self.referral_code = result.data[0]['referral_code']

            return True

        except Exception as e:
            logger.error(f"❌ Error saving user: {e}")
            return False

    @classmethod
    def create_from_telegram(cls, telegram_data: Dict, referral_code: str = None) -> Optional['VipTonUser']:
        """Створює користувача з Telegram даних"""
        try:
            # Знаходимо реферера
            referred_by_id = None
            if referral_code:
                referrer = cls.find_by_referral_code(referral_code)
                if referrer:
                    referred_by_id = referrer.id

            user = cls(
                telegram_id=str(telegram_data['id']),
                username=telegram_data.get('username', ''),
                first_name=telegram_data.get('first_name', ''),
                last_name=telegram_data.get('last_name', ''),
                photo_url=telegram_data.get('photo_url', ''),
                language_code=telegram_data.get('language_code', 'en'),
                is_premium=telegram_data.get('is_premium', False),
                referred_by_id=referred_by_id,
                ton_balance=0,
                settings={
                    'notifications': True,
                    'sound': True
                }
            )

            if user.save():
                # Нараховуємо реферальні бонуси якщо є
                if referred_by_id and referrer:
                    # 5% для нового користувача, 10% для реферера (від базової суми)
                    pass  # Це вже в іншій логіці

                return user
            return None

        except Exception as e:
            logger.error(f"❌ Error creating user from telegram: {e}")
            return None

    @classmethod
    def find_by_referral_code(cls, code: str) -> Optional['VipTonUser']:
        """Знаходить користувача по реферальному коду"""
        try:
            db = get_db()
            result = db.table('users').select('*').eq('referral_code', code).execute()
            if result.data:
                return cls(**result.data[0])
            return None
        except:
            return None

    def is_vip(self) -> bool:
        """Перевіряє чи користувач має VIP"""
        if not self.vip_until:
            return False

        vip_until = self.vip_until
        if isinstance(vip_until, str):
            vip_until = datetime.fromisoformat(vip_until.replace('Z', '+00:00'))

        return datetime.utcnow() < vip_until

    def is_admin(self) -> bool:
        """Перевіряє чи користувач адмін"""
        try:
            db = get_db()
            result = db.table('admins').select('id').eq('user_id', self.id).eq('is_active', True).execute()
            return bool(result.data)
        except:
            return False

    def to_dict(self) -> Dict[str, Any]:
        """Конвертує в словник для API"""
        return {
            'id': self.id,
            'telegram_id': self.telegram_id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'photo_url': self.photo_url,
            'language_code': self.language_code,
            'ton_balance': self.ton_balance,
            'is_vip': self.is_vip(),
            'vip_until': self.vip_until,
            'vip_level': self.vip_level,
            'is_admin': self.is_admin(),
            'referral_code': self.referral_code,
            'total_referrals': self.total_referrals,
            'referral_earnings': self.referral_earnings,
            'total_earned': self.total_earned,
            'total_spent': self.total_spent,
            'is_premium': self.is_premium,
            'created_at': self.created_at,
            'settings': self.settings
        }