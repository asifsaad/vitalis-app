import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);

  const addMessage = (text, type) => {
    setMessages((prev) => [...prev, { text, type }]);
  };

  const addFile = (fileList) => {
    setFiles((prev) => [...prev, ...fileList]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, files, addFile, removeFile }}>
      {children}
    </ChatContext.Provider>
  );
};