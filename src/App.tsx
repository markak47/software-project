// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import EmployeeRole from "./pages/EmployeeRole";
import TeacherLogin from "./pages/TeacherLogin";
import ParentLogin from "./pages/ParentLogin";
import ManagerLogin from "./pages/ManagerLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import BirthdayPlanner from "./pages/BirthdayPlanner";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />

        {/* 👩‍🏫 Staff Selection + Logins */}
        <Route path="/employee-role" element={<EmployeeRole />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />

        {/* 🧑‍🏫 Dashboards */}
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route
          path="/dashboard/teacher/birthday-planner"
          element={<BirthdayPlanner />}
        />
        <Route path="/dashboard/parent" element={<ParentDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />

        <Route path="/dashboard/manager" element={<ManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
