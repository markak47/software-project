import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { BirthdayProvider } from "./context/BirthdayContext";
import { TeacherStatusProvider } from "./context/TeacherStatusContext";
import { UserProvider } from "./context/UserContext"; // ✅ Import must go here

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BirthdayProvider>
        <UserProvider>
          <TeacherStatusProvider>
            <App />
          </TeacherStatusProvider>
        </UserProvider>
      </BirthdayProvider>
    </AuthProvider>
  </React.StrictMode>
);
