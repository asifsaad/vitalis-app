import React, { useState } from "react";

const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Message ChatGPT"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input-field flex-grow bg-gray-900 text-white rounded-lg px-4 py-2 mr-2"
      />
      {/* Send Button */}
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatBox;
