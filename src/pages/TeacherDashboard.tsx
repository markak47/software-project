import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f9ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1d4ed8" }}>
        👩‍🏫 Teacher Dashboard
      </h1>

      <div style={{ display: "flex", gap: "2rem", flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => navigate("/dashboard/teacher/my-schedule")}
          style={buttonStyle}
        >
          My Schedule
        </button>
        <button
          onClick={() => navigate("/dashboard/teacher/request-vacation")}
          style={buttonStyle}
        >
          Request Vacation
        </button>
        <button
          onClick={() => navigate("/dashboard/teacher/birthday-planner")}
          style={buttonStyle}
        >
          🎉 Birthday Planner
        </button>
        <button
          onClick={() => navigate("/dashboard/teacher/status-report")}
          style={buttonStyle}
        >
          Status Report
        </button>
        <button
          onClick={() => navigate("/dashboard/teacher/status-report/manage")}
          style={buttonStyle}
        >
          View/edit Reports
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  minWidth: '220px',
};

export default TeacherDashboard;