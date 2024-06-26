import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext";
import { ThemeContextProvider } from "context/ThemeContext";
import { ModalContextProvider } from "context/ModalContext";
import { GlobalStyles } from "styles/globalStyles";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <AuthContextProvider>
        <ModalContextProvider>
          <Router>
            <GlobalStyles />
            <App />
          </Router>
        </ModalContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </Provider>
);
