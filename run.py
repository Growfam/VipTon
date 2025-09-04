# run.py
import sys
import os

# Додаємо поточну директорію до PATH
sys.path.insert(0, os.path.abspath('.'))

# Імпортуємо app
from backend.main import app

# Для gunicorn
application = app