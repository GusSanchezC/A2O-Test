FROM python:3.11
# Establece el directorio de trabajo
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /backend

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
