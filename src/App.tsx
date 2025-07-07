import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
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
import BirthdayScreen from "./pages/BirthdayScreen";

// Duty Plan Feature Imports
import DutyPlannerManager from "./pages/DutyPlannerManager";
import MySchedule from "./pages/MySchedule";
import VacationRequestForm from "./pages/VacationRequestForm";
import ManageVacationRequests from "./pages/ManageVacationRequests";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />

        {/* 👩‍🏫 Logins Only - modals triggered from Landing */}
        <Route
          path="/teacher-login"
          element={
            <TeacherLogin show={true} onClose={() => {}} onLogin={() => {}} />
          }
        />
        <Route
          path="/parent-login"
          element={
            <ParentLogin show={true} onClose={() => {}} onLogin={() => {}} />
          }
        />
        <Route
          path="/manager-login"
          element={
            <ManagerLogin show={true} onClose={() => {}} onLogin={() => {}} />
          }
        />

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
        <Route
          path="/dashboard/teacher/birthday-screen"
          element={<BirthdayScreen />}
        />
        <Route
          path="/dashboard/teacher/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />
        <Route path="/dashboard/teacher/my-schedule" element={<MySchedule />} />
        <Route
          path="/dashboard/teacher/request-vacation"
          element={<VacationRequestForm />}
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
        <Route
          path="/dashboard/manager/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />
        <Route
          path="/dashboard/manager/duty-planner"
          element={<DutyPlannerManager />}
        />
        <Route
          path="/dashboard/manager/vacation-requests"
          element={<ManageVacationRequests />}
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
        <Route
          path="/dashboard/parent/birthday-planner/edit/:id"
          element={<EditBirthday />}
        />
      </Routes>
    </Router>
  );
}

export default App;
