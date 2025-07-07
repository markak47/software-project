import React, { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const TeacherLoginModal: React.FC<Props> = ({ show, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          background: "linear-gradient(135deg, #f8fafc, #dbeafe)",
          borderRadius: "20px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          padding: "2.5rem",
          maxWidth: "420px",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            color: "#6b7280",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <h2 style={{ color: "#1d4ed8", fontSize: "1.8rem", fontWeight: 600 }}>
          👩‍🏫 Teacher Login
        </h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "0.85rem",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            transition: "border 0.2s ease",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "0.85rem",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            transition: "border 0.2s ease",
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "0.95rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(99, 102, 241, 0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1.03)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default TeacherLoginModal;
