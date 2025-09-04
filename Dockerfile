# Dockerfile для VipTon - Fixed PORT issue
FROM python:3.11-slim

# Встановлюємо системні залежності
RUN apt-get update && apt-get install -y \
    gcc \
    postgresql-client \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

# НЕ задаємо PORT тут - Railway встановить сам
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Створюємо start скрипт
RUN echo '#!/bin/bash\nexec gunicorn --bind 0.0.0.0:${PORT:-8080} --workers 2 --worker-class gevent --timeout 120 backend.main:app' > /app/start.sh && \
    chmod +x /app/start.sh

EXPOSE 8080

# Використовуємо shell форму для правильної інтерпретації змінних
CMD ["/bin/bash", "-c", "gunicorn --bind 0.0.0.0:${PORT:-8080} --workers 2 --worker-class gevent --timeout 120 backend.main:app"]