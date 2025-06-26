import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { BirthdayProvider } from "./context/BirthdayContext";
import { TeacherStatusProvider } from "./context/TeacherStatusContext"; // ✅ Import your new context
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BirthdayProvider>
        <TeacherStatusProvider>
          {" "}
          <UserProvider>
            {" "}
            <App />
          </UserProvider>
        </TeacherStatusProvider>
      </BirthdayProvider>
    </AuthProvider>
  </React.StrictMode>
);
