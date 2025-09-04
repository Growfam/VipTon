# core/database.py - VipTon Database Connection
import os
from supabase import create_client, Client
from datetime import datetime
import json
from typing import Dict, List, Optional, Any
import logging

logger = logging.getLogger(__name__)


class VipTonDatabase:
    """Менеджер для роботи з Supabase для VipTon проекту"""

    def __init__(self):
        self.url = os.getenv('SUPABASE_URL')
        self.service_key = os.getenv('SUPABASE_SERVICE_KEY')
        self.anon_key = os.getenv('SUPABASE_ANON_KEY')

        if not self.url or not self.service_key:
            raise ValueError("SUPABASE_URL та SUPABASE_SERVICE_KEY обов'язкові!")

        # Створюємо клієнт з service роллю для повного доступу
        self.client: Client = create_client(self.url, self.service_key)
        logger.info("✅ VipTon Supabase connection established")

    def table(self, table_name: str):
        """Повертає reference на таблицю"""
        return self.client.table(table_name)

    def get_vip_packages(self) -> List[Dict]:
        """Отримує всі VIP пакети"""
        try:
            result = self.client.table('vip_packages').select('*').eq('is_active', True).order('level').execute()
            return result.data if result else []
        except Exception as e:
            logger.error(f"❌ Error getting VIP packages: {e}")
            return []

    def get_stats(self) -> Dict:
        """Отримує загальну статистику"""
        try:
            users_table = self.client.table('users')

            # Загальна кількість користувачів
            total_result = users_table.select('*', count='exact').execute()
            total_users = total_result.count if total_result else 0

            # Активні користувачі сьогодні
            today_start = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0).isoformat()
            active_result = users_table.select('*', count='exact').gte('last_login', today_start).execute()
            active_today = active_result.count if active_result else 0

            # VIP користувачі
            vip_result = users_table.select('*', count='exact').gte('vip_until',
                                                                    datetime.utcnow().isoformat()).execute()
            vip_users = vip_result.count if vip_result else 0

            return {
                'total_users': total_users,
                'active_today': active_today,
                'vip_users': vip_users,
                'timestamp': datetime.utcnow().isoformat()
            }
        except Exception as e:
            logger.error(f"❌ Error getting stats: {e}")
            return {}


# Глобальний екземпляр
vipton_db = None


def init_db(app):
    """Ініціалізує базу даних VipTon"""
    global vipton_db

    try:
        vipton_db = VipTonDatabase()
        logger.info("🎯 VipTon database initialization completed successfully!")

    except Exception as e:
        logger.error(f"💥 VipTon database initialization failed: {e}")
        raise


def get_db() -> VipTonDatabase:
    """Повертає екземпляр бази даних VipTon"""
    global vipton_db
    if vipton_db is None:
        raise RuntimeError("VipTon database not initialized! Call init_db() first.")
    return vipton_db


# Допоміжні функції
class VipTonDatabaseHelper:
    """Допоміжні методи для роботи з VipTon базою"""

    @staticmethod
    def serialize_for_json(obj):
        """Серіалізує об'єкт для JSON"""
        if isinstance(obj, datetime):
            return obj.isoformat()
        elif hasattr(obj, '__dict__'):
            return obj.__dict__
        return obj

    @staticmethod
    def clean_dict(data: Dict) -> Dict:
        """Очищує словник від None значень"""
        return {k: v for k, v in data.items() if v is not None}