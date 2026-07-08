from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)


@app.get("/api/health")
async def api_health():
    return JSONResponse(status_code=200, content={"status": "ok"})
