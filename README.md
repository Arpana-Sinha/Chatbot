# AI Chatbot

A full-stack AI chatbot application with a React frontend and FastAPI backend, powered by Hugging Face's Llama model.

## 🚀 Features

- **Modern React UI**: Clean, responsive chat interface with real-time messaging
- **FastAPI Backend**: Fast and efficient API server with CORS support
- **Hugging Face Integration**: Uses Llama 3.1 8B Instruct model via Hugging Face API
- **Auto-scrolling**: Chat automatically scrolls to show the latest messages
- **Error Handling**: Graceful error handling on both frontend and backend
- **Loading States**: Visual feedback during API requests

## 📁 Project Structure

```
chatbot/
├── backend/
│   ├── main.py              # FastAPI server and chat endpoint
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main chat component
│   │   └── main.jsx         # React entry point
│   ├── package.json         # Node.js dependencies
│   └── vite.config.js      # Vite configuration
└── README.md               # This file
```

## 🛠️ Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **Hugging Face Account** with API token

```

## 🎯 Usage

1. Open your browser and navigate to the frontend URL 
2. Type a message in the chat input box
3. Press **Enter** or click the **Send** button
4. Wait for the AI response (you'll see "..." while loading)
5. Continue the conversation!

```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation
- **python-dotenv** - Environment variable management
- **requests** - HTTP library for API calls

### AI/ML
- **Hugging Face API** - AI model hosting and inference
- **Llama 3.1 8B Instruct** - Language model
