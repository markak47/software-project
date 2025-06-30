import React, { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const ManagerLoginModal: React.FC<Props> = ({ show, onClose, onLogin }) => {
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
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
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
          background: "linear-gradient(135deg, #1f2937, #4b5563)",
          color: "#f9fafb",
          borderRadius: "20px",
          boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
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
            color: "#d1d5db",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>

        <h2 style={{ fontSize: "1.9rem", fontWeight: 600, color: "#facc15" }}>
          👨‍💼 Manager Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "0.85rem",
            borderRadius: "10px",
            border: "1px solid #9ca3af",
            fontSize: "1rem",
            backgroundColor: "#f9fafb",
            color: "#1f2937",
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
            border: "1px solid #9ca3af",
            fontSize: "1rem",
            backgroundColor: "#f9fafb",
            color: "#1f2937",
          }}
        />

        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #facc15 0%, #eab308 100%)",
            color: "#1f2937",
            border: "none",
            borderRadius: "10px",
            padding: "0.95rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(234, 179, 8, 0.3)",
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

export default ManagerLoginModal;
