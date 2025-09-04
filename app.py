# app.py - VipTon Application Wrapper
import sys
import os

# Додаємо backend до Python path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

# Тепер імпортуємо main
from main import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    print(f"🚀 Starting VipTon on port {port}")
    app.run(host='0.0.0.0', port=port, debug=False)