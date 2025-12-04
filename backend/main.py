import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")
MODEL = "meta-llama/Llama-3.1-8B-Instruct"  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Msg(BaseModel):
    message: str

@app.post("/chat")
async def chat(msg: Msg):
    url = "https://router.huggingface.co/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "user", "content": msg.message}
        ],
        "max_tokens": 200
    }

    try:
        res = requests.post(url, json=payload, headers=headers)
        data = res.json()

        if "choices" in data:
            return {"reply": data["choices"][0]["message"]["content"]}

        return {"reply": str(data)}

    except Exception as e:
        return {"reply": "Error: " + str(e)}
