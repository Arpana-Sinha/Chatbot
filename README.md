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

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd chatbot
```

### 2. Backend Setup

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install requests (if not already installed)
pip install requests

# Create .env file
echo HF_TOKEN=your_huggingface_token_here > .env
```

**Note**: Replace `your_huggingface_token_here` with your actual Hugging Face API token. You can get one from [Hugging Face Settings](https://huggingface.co/settings/tokens).

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd backend

# Activate virtual environment if not already activated
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Run the FastAPI server
uvicorn main:app --reload --port 8000
```

The backend will be available at `http://localhost:8000`

### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is busy)

## 🎯 Usage

1. Open your browser and navigate to the frontend URL (usually `http://localhost:5173`)
2. Type a message in the chat input box
3. Press **Enter** or click the **Send** button
4. Wait for the AI response (you'll see "..." while loading)
5. Continue the conversation!

## 🔧 Configuration

### Changing the AI Model

Edit `backend/main.py` and change the `MODEL` variable:

```python
MODEL = "meta-llama/Llama-3.1-8B-Instruct"   # Change to your preferred model
```

### Adjusting Response Length

In `backend/main.py`, modify the `max_tokens` parameter:

```python
payload = {
    "model": MODEL,
    "messages": [
        {"role": "user", "content": msg.message}
    ],
    "max_tokens": 200  # Increase or decrease as needed
}
```

### Changing Backend Port

If you need to change the backend port, update:
- Backend: Change the port in the `uvicorn` command
- Frontend: Update the API URL in `frontend/src/App.jsx` (line 23)

## 📝 API Endpoints

### POST `/chat`

Sends a message to the AI and receives a response.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "reply": "Hello! I'm doing well, thank you for asking..."
}
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

## 🐛 Troubleshooting

### Backend Issues

- **Module not found errors**: Make sure you've installed all dependencies with `pip install -r requirements.txt` and `pip install requests`
- **CORS errors**: The backend is configured to allow all origins. If you still see CORS errors, check that the backend is running on port 8000
- **API token errors**: Verify your `HF_TOKEN` is correctly set in the `.env` file

### Frontend Issues

- **Connection refused**: Ensure the backend server is running on `http://localhost:8000`
- **Build errors**: Try deleting `node_modules` and running `npm install` again

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

If you encounter any issues or have questions, please open an issue on the repository.

