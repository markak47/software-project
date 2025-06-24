import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BirthdayProvider } from "./context/BirthdayContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BirthdayProvider>
      <App />
    </BirthdayProvider>
  </React.StrictMode>
);
