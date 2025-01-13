import React from "react";

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages-container bg-gray-900 p-4 rounded-lg h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message my-2 p-2 rounded-lg ${
            msg.type === "user"
              ? "bg-blue-500 text-white text-right"
              : "bg-gray-700 text-white text-left"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
