// src/pages/ManagerLogin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sampleUsers } from "../data/sampleUsers";

function ManagerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = sampleUsers.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === "manager"
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/dashboard/manager");
    } else {
      alert("Invalid credentials or role");
    }
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(44, 62, 80, 0.13)",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#2d3748",
            marginBottom: "1.5rem",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Manager Login
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
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            width: "100%",
            outline: "none",
            background: "#f7fafc",
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
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            width: "100%",
            outline: "none",
            background: "#f7fafc",
            transition: "border 0.2s",
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #434343 0%, #262626 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.9rem 2.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(44, 62, 80, 0.10)",
            transition: "transform 0.12s, box-shadow 0.12s, background 0.2s",
            letterSpacing: "0.5px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.background =
              "linear-gradient(90deg, #262626 0%, #434343 100%)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background =
              "linear-gradient(90deg, #434343 0%, #262626 100%)";
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}
export default ManagerLogin;
