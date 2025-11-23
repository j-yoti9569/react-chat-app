const { useState } = React;

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Beautiful React Chat ✨", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, from: "me" };
    setMessages([...messages, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: "You said: " + input,
        from: "bot",
      };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="chat-box">
      <div className="header">Chat App 💬</div>

      <div className="messages">
        {messages.map(m => (
          <div key={m.id} className={`msg ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
