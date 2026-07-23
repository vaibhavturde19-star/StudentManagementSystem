import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Import our styles so they apply to the whole app
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)