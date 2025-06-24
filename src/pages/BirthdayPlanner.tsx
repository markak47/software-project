// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import EmployeeRole from "./pages/EmployeeRole";
import TeacherDashboard from "./pages/TeacherDashboard";
import BirthdayList from "./pages/BirthdayList";
import AddBirthday from "./pages/AddBirthday";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/employee-role" element={<EmployeeRole />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

        {/* Nested birthday planner routes */}
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
