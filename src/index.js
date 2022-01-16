import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { NewsProvider } from "./contexts/NewsContext";
import { CoinsProvider } from "./contexts/CoinsContext";

ReactDOM.render(
  <React.StrictMode>
    <CoinsProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </CoinsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
