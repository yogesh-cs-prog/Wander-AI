import React, { useState, useRef, useEffect } from "react";
import './style.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesRef = useRef(null);
  const fakeMessages = [
    "Hola como estas?",
    "That's awesome",
    "Codepen is a nice place to stay",
    "I think you're a nice person",
    "Why do you think that?",
    "Can you explain?",
    "Anyway I've gotta go now",
    "It was a pleasure chat with you",
    "Time to make a new codepen",
    "Bye",
    ":)"
  ];
  let i = 0;

  const updateScrollbar = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  const setDate = () => {
    const d = new Date();
    const minutes = d.getMinutes();
    if (minutes !== m) {
      m = minutes;
      setMessages(prevMessages => [
        ...prevMessages,
        <div className="timestamp">{d.getHours()}:{minutes}</div>
      ]);
    }
  };

  const insertMessage = () => {
    if (!input.trim()) return;
    setMessages(prevMessages => [
      ...prevMessages,
      <div className="message message-personal">{input}</div>
    ]);
    setInput('');
    updateScrollbar();
    setTimeout(fakeMessage, 1000 + Math.random() * 20 * 100);
  };

  const fakeMessage = () => {
    if (input) return;
    setMessages(prevMessages => [
      ...prevMessages,
      <div className="message loading new">
        <figure className="avatar">
          <img src="https://www.pikpng.com/pngl/b/109-1099794_ios-emoji-emoji-iphone-ios-heart-hearts-spin.png" alt="Avatar" />
        </figure>
        <span></span>
      </div>
    ]);
    updateScrollbar();

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages.slice(0, prevMessages.length - 1),
        <div className="message new">
          <figure className="avatar">
            <img src="https://www.pikpng.com/pngl/b/109-1099794_ios-emoji-emoji-iphone-ios-heart-hearts-spin.png" alt="Avatar" />
          </figure>
          {fakeMessages[i]}
        </div>
      ]);
      updateScrollbar();
      i++;
    }, 1000 + Math.random() * 20 * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertMessage();
  };

  useEffect(() => {
    if (messages.length) {
      setDate();
    }
  }, [messages]);

  return (
    <div className="chat floating-component">
      <div className="chat-title">
        <h1>Bot</h1>
        <h2>call center</h2>
        <figure className="avatar">
          <img src="https://www.pikpng.com/pngl/b/109-1099794_ios-emoji-emoji-iphone-ios-heart-hearts-spin.png" alt="Avatar" />
        </figure>
      </div>
      <div className="messages" ref={messagesRef}>
        <div className="messages-content">
          {messages}
        </div>
      </div>
      <div className="message-box">
        <textarea
          type="text"
          className="message-input"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="message-submit" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default ChatBot;
