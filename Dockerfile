FROM python:3.11-slim

WORKDIR /app

# Встановлюємо залежності системи
RUN apt-get update && apt-get install -y \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Копіюємо requirements і встановлюємо
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копіюємо весь проект
COPY . .

CMD ["gunicorn", "backend.main:app", "--bind", "0.0.0.0:8080", "--workers", "4", "--timeout", "120"]