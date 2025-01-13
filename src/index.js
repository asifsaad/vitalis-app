import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Main App component
import "./styles/styles.css"; // Global CSS styles (Tailwind or custom styles)

// React 18 uses createRoot for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);