FROM python:3.12.13-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN addgroup --system --gid 5001 python && \
    adduser --system --uid 5001 --disabled-password --no-create-home --ingroup python python

COPY --chown=python:python ./ ./

RUN --mount=type=cache,target=/root/.cache/pip \
    python -m pip install .

USER python

HEALTHCHECK --interval=5m --timeout=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/api/health')" || exit 1

CMD ["fastapi", "run"]
