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
import BirthdayList from "./pages/BirthdayList";
import AddBirthday from "./pages/AddBirthday";
import EditBirthday from "./pages/EditBirthday";
import TeacherStatusForm from "./pages/TeacherStatusForm";
import StatusManager from "./pages/StatusManager";
import ManageEmployees from "./pages/manageEmployees";
import TeacherReportList from "./pages/TeacherReportList";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />

        {/* 👩‍🏫 Role Selection + Logins */}
        <Route path="/employee-role" element={<EmployeeRole />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />

        {/* 👨‍🏫 Teacher Dashboard with nested birthday planner */}
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route
          path="/dashboard/teacher/birthday-planner"
          element={<BirthdayPlanner />}
        >
          <Route index element={<BirthdayList />} />
          <Route path="add" element={<AddBirthday />} />
        </Route>
        <Route
          path="/dashboard/teacher/status-report"
          element={<TeacherStatusForm />}
        />
        <Route
          path="/dashboard/teacher/status-report/manage"
          element={<StatusManager />}
        />

        {/* 🧑‍💼 Manager Dashboard */}
        <Route path="/dashboard/manager" element={<ManagerDashboard />} />
        <Route
          path="/dashboard/manager/employees"
          element={<ManageEmployees />}
        />

        <Route
          path="/dashboard/manager/reports"
          element={<TeacherReportList />}
        />

        {/* 👨‍👩‍👧‍👦 Parent Dashboard */}
        <Route path="/dashboard/parent" element={<ParentDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route
          path="/dashboard/parent/birthday-planner"
          element={<BirthdayPlanner />}
        >
          <Route index element={<BirthdayList />} />
          <Route path="add" element={<AddBirthday />} />
          <Route path="list" element={<BirthdayList />} />
        </Route>

        {/* ✏️ Edit Birthday Routes */}
        <Route
          path="/dashboard/teacher/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />
        <Route
          path="/dashboard/parent/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />
        <Route
          path="/dashboard/manager/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />

        {/* 🔁 Legacy Fallback */}
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
