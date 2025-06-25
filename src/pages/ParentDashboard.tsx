import React from "react";
import { useNavigate } from "react-router-dom";

function ParentDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  const familyName = user?.username || "Parent";

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2.5rem 1rem",
        background: "linear-gradient(135deg, #f0f4ff 0%, #93c5fd 100%)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "2rem auto",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(59,130,246,0.10)",
          padding: "2.5rem 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1.2rem",
            color: "#2563eb",
            letterSpacing: "0.5px",
          }}
        >
          Parent Dashboard
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2.2rem",
            color: "#64748b",
            fontSize: "1.1rem",
          }}
        >
          Welcome {familyName}'s family! here You can manage your child's
          preferences below.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => navigate("/dashboard/parent/birthday-planner/add")}
            style={buttonStyle("#60a5fa", "#2563eb")}
          >
            add child's data
          </button>
          <button
            onClick={() => navigate("/dashboard/parent/birthday-planner/list")}
            style={buttonStyle("#60a5fa", "#2563eb")}
          >
            View upcoming Birthdays
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (from: string, to: string): React.CSSProperties => ({
  background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
  color: "#fff",
  padding: "0.9rem 2.2rem",
  borderRadius: "10px",
  border: "none",
  fontSize: "1.1rem",
  fontWeight: 600,
  boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
  cursor: "pointer",
  transition: "transform 0.12s, background 0.2s",
});

export default ParentDashboard;
