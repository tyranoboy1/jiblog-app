import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AuthContextProvider } from "context/AuthContext";
import { ThemeContextProvider } from "context/ThemeContext";
import { ModalContextProvider } from "context/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <ModalContextProvider>
        <Router>
          <App />
        </Router>
      </ModalContextProvider>
    </AuthContextProvider>
  </ThemeContextProvider>
);
