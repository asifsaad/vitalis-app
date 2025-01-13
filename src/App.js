import React, { useContext } from 'react';
import { ChatProvider, ChatContext } from './context/ChatContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import ChatMessages from './components/ChatMessages';
import FileUploader from './components/FileUploader';
import FileList from './components/FileList';

const App = () => {
  const { messages, addMessage, files, addFile, removeFile } = useContext(ChatContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <FileUploader onFileUpload={addFile} />
        <FileList files={files} onRemoveFile={removeFile} />
        <ChatMessages messages={messages} />
        <ChatBox onSendMessage={(text) => addMessage(text, 'user')} />
      </main>
      <Footer />
    </div>
  );
};

export default () => (
  <ChatProvider>
    <App />
  </ChatProvider>
);