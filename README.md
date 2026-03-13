> ✅ Repo verified: Hackathon_7March — pushed from version1.1 branch

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GMI Cloud Integration

Atlas supports [GMI Cloud](https://www.gmicloud.ai/) as an alternative LLM provider alongside Google Gemini.
GMI Cloud offers an OpenAI-compatible inference API with models such as **DeepSeek-R1**, **Llama 3.3 70B**, and **Qwen 2.5 72B**.

### How it works

```
Browser  →  POST /api/gmi/chat  →  Express backend  →  https://api.gmi-serving.com/v1
```

The `GMI_CLOUD_API_KEY` is kept on the backend so it is never exposed in the browser bundle.

### Setup

1. Obtain a GMI Cloud API key at <https://app.gmi-serving.com/api-keys>

2. Add it to your backend environment:

   ```bash
   # backend/.env
   GMI_CLOUD_API_KEY=your_key_here
   ```

   Or, if running via Docker Compose, add it to the root `.env` file:

   ```bash
   # .env
   GMI_CLOUD_API_KEY=your_key_here
   ```

3. Start the backend (it also starts automatically with `docker-compose up`):

   ```bash
   cd backend && npm run dev
   ```

4. In the Atlas chat UI, open the model selector and choose any **GMI Cloud** model:
   - `deepseek-ai/DeepSeek-R1`
   - `meta-llama/Meta-Llama-3.3-70B-Instruct`
   - `Qwen/Qwen2.5-72B-Instruct`

### Available API endpoint

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/gmi/chat` | Proxies a chat completion request to GMI Cloud |

**Request body:**
```json
{
  "model": "deepseek-ai/DeepSeek-R1",
  "messages": [
    { "role": "system", "content": "..." },
    { "role": "user",   "content": "Suggest beach destinations under $2000" }
  ]
}
```

**Response:**
```json
{ "content": "{ ... atlas JSON response ... }" }
```
