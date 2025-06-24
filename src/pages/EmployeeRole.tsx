// src/pages/EmployeeRole.tsx
import { useNavigate } from "react-router-dom";

function EmployeeRole() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "4rem",
        background:
          "linear-gradient(135deg,rgb(236, 239, 242) 0%,rgb(17, 219, 230) 100%)",
        minHeight: "60vh",
        borderRadius: "24px",
        boxShadow: "0 8px 32px rgba(60,60,120,0.16)",
        padding: "2.5rem",
        maxWidth: "420px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Confetti */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "10%",
            top: "10%",
            fontSize: "2rem",
            animation: "float 3s infinite alternate",
          }}
        >
          🎈
        </span>
        <span
          style={{
            position: "absolute",
            left: "70%",
            top: "20%",
            fontSize: "1.8rem",
            animation: "float 2.5s infinite alternate-reverse",
          }}
        >
          🎉
        </span>
        <span
          style={{
            position: "absolute",
            left: "30%",
            top: "70%",
            fontSize: "2.2rem",
            animation: "float 2.8s infinite alternate",
          }}
        >
          🎊
        </span>
        <span
          style={{
            position: "absolute",
            left: "80%",
            top: "80%",
            fontSize: "1.7rem",
            animation: "float 2.2s infinite alternate-reverse",
          }}
        >
          ✨
        </span>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              100% { transform: translateY(-18px); }
            }
          `}
        </style>
      </div>
      <h2
        style={{
          color: "#4f46e5",
          marginBottom: "2.5rem",
          fontSize: "2.2rem",
          zIndex: 1,
          position: "relative",
        }}
      >
        🎉 Select your role
      </h2>
      <button
        onClick={() => navigate("/teacher-login")}
        style={{
          margin: "1.2rem",
          padding: "1.1rem 2.2rem",
          fontSize: "1.15rem",
          borderRadius: "10px",
          border: "none",
          background:
            "linear-gradient(90deg,rgb(24, 230, 48) 0%,rgb(6, 28, 230) 100%)",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 2px 12px rgba(79,70,229,0.10)",
          transition: "transform 0.12s, box-shadow 0.12s, background 0.2s",
          fontWeight: 600,
          zIndex: 1,
          position: "relative",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.07)";
          e.currentTarget.style.background =
            "linear-gradient(90deg, #818cf8 0%, #6366f1 100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background =
            "linear-gradient(90deg, #a5b4fc 0%, #818cf8 100%)";
        }}
      >
        👩‍🏫 I am a Teacher
      </button>
      <button
        onClick={() => navigate("/manager-login")}
        style={{
          margin: "1.2rem",
          padding: "1.1rem 2.2rem",
          fontSize: "1.15rem",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
          color: "#333",
          cursor: "pointer",
          boxShadow: "0 2px 12px rgba(236,72,153,0.10)",
          transition: "transform 0.12s, box-shadow 0.12s, background 0.2s",
          fontWeight: 600,
          zIndex: 1,
          position: "relative",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.07)";
          e.currentTarget.style.background =
            "linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background =
            "linear-gradient(90deg,rgb(238, 94, 5) 0%, #a6c1ee 100%)";
        }}
      >
        👨‍💼 I am a Manager
      </button>
      <div
        style={{
          marginTop: "2.5rem",
          color: "#64748b",
          fontSize: "1rem",
          zIndex: 1,
          position: "relative",
        }}
      >
        <span>
          Not an employee?{" "}
          <span style={{ color: "#f59e42", fontWeight: 500 }}>Go back</span> to
          the main page.
        </span>
      </div>
    </div>
  );
}

export default EmployeeRole;
