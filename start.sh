#!/bin/bash
# start.sh - VipTon startup script

echo "🚀 Starting VipTon..."

# Перевіряємо змінні оточення
if [ -z "$PORT" ]; then
    export PORT=8080
fi

if [ "$ENVIRONMENT" = "production" ]; then
    echo "📦 Running in production mode..."

    # Запускаємо міграції якщо потрібно
    # python backend/migrate.py

    # Запускаємо Gunicorn
    exec gunicorn \
        --bind 0.0.0.0:$PORT \
        --workers 4 \
        --worker-class sync \
        --timeout 120 \
        --access-logfile - \
        --error-logfile - \
        --log-level info \
        backend.main:app
else
    echo "🔧 Running in development mode..."
    exec python backend/main.py
fi