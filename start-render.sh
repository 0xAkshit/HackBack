#!/usr/bin/env bash
set -e

echo "=== [Render] Running database migrations ==="
cd /app && alembic upgrade head

echo "=== [Render] Starting Celery worker in background ==="
cd /app/backend
celery -A tasks.celery_app worker -P threads -c 4 --loglevel=info &

echo "=== [Render] Starting FastAPI server on port ${PORT:-8000} ==="
exec uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"
