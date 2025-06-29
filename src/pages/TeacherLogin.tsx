// src/pages/TeacherLogin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sampleUsers } from "../data/sampleUsers";

function TeacherLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = sampleUsers.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === "teacher"
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/dashboard/teacher");
    } else {
      alert("Invalid credentials or role");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top,rgba(255, 255, 255, 0.2),rgb(45, 7, 217))",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(60,60,120,0.13)",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4f46e5", marginBottom: "1.5rem" }}>
          Teacher Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginBottom: "1rem",
            padding: "0.9rem 1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d2fe",
            fontSize: "1rem",
            width: "100%",
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginBottom: "1.3rem",
            padding: "0.9rem 1.1rem",
            borderRadius: "8px",
            border: "1px solid #c7d2fe",
            fontSize: "1rem",
            width: "100%",
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #818cf8 0%, #6366f1 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.9rem 2.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(79,70,229,0.10)",
            transition: "transform 0.12s, box-shadow 0.12s, background 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.background =
              "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background =
              "linear-gradient(90deg, #818cf8 0%, #6366f1 100%)";
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default TeacherLogin;
