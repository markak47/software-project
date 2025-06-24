import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import EmployeeRole from "./pages/EmployeeRole";
import TeacherDashboard from "./pages/TeacherDashboard";
import BirthdayList from "./pages/BirthdayList";
import AddBirthday from "./pages/AddBirthday";
import TeacherLogin from "./pages/TeacherLogin";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔑 General Login and Navigation */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />

        {/* 👩‍🏫 Staff Route Selection */}
        <Route path="/employee-role" element={<EmployeeRole />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />

        {/* 🧑‍🏫 Teacher Dashboard */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

        {/* 🎂 Birthday Planner Nested Pages */}
        <Route
          path="/teacher-dashboard/birthday-planner"
          element={
            <>
              <Navbar />
              <BirthdayList />
            </>
          }
        />
        <Route
          path="/teacher-dashboard/birthday-planner/add"
          element={
            <>
              <Navbar />
              <AddBirthday />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
