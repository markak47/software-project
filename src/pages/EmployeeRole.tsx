import { useNavigate } from "react-router-dom";

function EmployeeRole() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ede9fe, #c4b5fd)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#6d28d9" }}>
        Who Are You? 👀
      </h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          onClick={() => navigate("/teacher-dashboard")}
          style={buttonStyle}
        >
          🧑‍🏫 I am a Teacher
        </button>
        <button
          onClick={() => navigate("/manager-dashboard")}
          style={buttonStyle}
        >
          👩‍💼 I am the Manager
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  backgroundColor: "#8b5cf6",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default EmployeeRole;
