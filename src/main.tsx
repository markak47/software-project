import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { BirthdayProvider } from "./context/BirthdayContext";
import { TeacherStatusProvider } from "./context/TeacherStatusContext";
import { UserProvider } from "./context/UserContext";
import { DutyPlanProvider } from "./context/DutyPlanContext"; // ✅ Import new provider
import { VacationRequestProvider } from "./context/VacationRequestContext"; // ✅ Import new provider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BirthdayProvider>
        <UserProvider>
          <DutyPlanProvider>
            <VacationRequestProvider>
              <TeacherStatusProvider>
                <App />
              </TeacherStatusProvider>
            </VacationRequestProvider>
          </DutyPlanProvider>
        </UserProvider>
      </BirthdayProvider>
    </AuthProvider>
  </React.StrictMode>
);