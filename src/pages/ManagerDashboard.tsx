// src/pages/ManagerDashboard.tsx
import { useNavigate } from "react-router-dom";

function ManagerDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ecfdf5", // light green
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#047857" }}>
        🧑‍💼 Manager Dashboard
      </h1>

      <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "#065f46" }}>
        Welcome Manager! You can assign tasks and review birthday organization
        here.
      </p>

      <div style={{ display: "flex", gap: "2rem" }}>
        <button onClick={() => navigate("employees")} style={buttonStyle}>
          Manage Employees
        </button>

        <button
          onClick={() => navigate("/dashboard/teacher/birthday-planner")}
          style={buttonStyle}
        >
          🎂 View Birthdays
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  backgroundColor: "#10b981", // teal green
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default ManagerDashboard;
