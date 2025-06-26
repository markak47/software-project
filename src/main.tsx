import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { BirthdayProvider } from "./context/BirthdayContext";
import { TeacherStatusProvider } from "./context/TeacherStatusContext"; // ✅ Import your new context

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BirthdayProvider>
        <TeacherStatusProvider>
          {" "}
          <App />
        </TeacherStatusProvider>
      </BirthdayProvider>
    </AuthProvider>
  </React.StrictMode>
);
