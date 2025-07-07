// src/pages/ManagerDashboard.tsx
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";

function ManagerDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: '4rem',
        padding: '2rem',
        background: "#ecfdf5", // light green
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ flex: 1, maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#047857" }}>
          🧑‍💼 Manager Dashboard
        </h1>

        <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "#065f46", textAlign: 'center' }}>
          Welcome Manager! You can manage schedules, employees, and requests here.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <button onClick={() => navigate("/dashboard/manager/duty-planner")} style={buttonStyle}>
            Duty Planner
          </button>
          <button onClick={() => navigate("employees")} style={buttonStyle}>
            Manage Employees
          </button>
          <button
            onClick={() => navigate("/dashboard/manager/vacation-requests")}
            style={buttonStyle}
          >
            Vacation Requests
          </button>
          <button
            onClick={() => navigate("/dashboard/teacher/birthday-planner")}
            style={buttonStyle}
          >
            🎂 Birthday Planner
          </button>
        </div>
      </div>

      <div style={{ flexShrink: 0, marginTop: '2rem' }}>
         <Chatbot />
      </div>

    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "1rem 1.5rem",
  fontSize: "1.1rem",
  backgroundColor: "#10b981", // teal green
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  textAlign: 'center',
};

export default ManagerDashboard;