import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { id: 0, sender: "bot", text: "Hi — ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), sender: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Server error");
      }

      const data = await res.json();
      setMessages((m) => [...m, { id: Date.now() + 1, sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((m) => [...m, { id: Date.now() + 2, sender: "bot", text: "Error: " + err.message }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "32px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>AI Chat</h1>

      <div
        ref={boxRef}
        style={{
          height: 420,
          border: "1px solid #7586a7ff",
          borderRadius: 8,
          padding: 12,
          overflowY: "auto",
          background: "#324d7aff",
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: m.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "78%",
                padding: 10,
                borderRadius: 8,
                background: m.sender === "user" ? "#91c481ff" : "#9abc84ff",
                boxShadow: "0 1px 1px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 14, whiteSpace: "pre-wrap" }}>{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type a message and press Enter"
          style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #8ba8d4ff", minHeight: 48 }}
        />
        <button onClick={sendMessage} disabled={loading} style={{ padding: "10px 16px", borderRadius: 6 }}>
          {loading ? "..." : "Send"}
        </button>
      </div>

      {/* <div style={{ marginTop: 8, color: "#6b7280", fontSize: 13 }}>
        Backend: <b>http://localhost:8000</b>
      </div> */}
    </div>
  );
}
