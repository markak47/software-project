import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f7fa, #b2ebf2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#00796b" }}
      >
        🎉 Welcome to the Daycare App!
      </h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        <button onClick={() => navigate("/employee-role")} style={buttonStyle}>
          Staff Login
        </button>
        <button
          onClick={() => navigate("/parent-dashboard")}
          style={buttonStyle}
        >
          Parent Login
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "1rem 2rem",
  fontSize: "1.2rem",
  backgroundColor: "#00796b",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background 0.3s",
};

export default Login;
