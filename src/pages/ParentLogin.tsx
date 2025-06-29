import React, { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const ParentLoginModal: React.FC<Props> = ({ show, onClose, onLogin }) => {
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
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <form
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg,rgb(236, 239, 242) 0%,rgb(17, 219, 230) 100%)",
          minHeight: "50vh",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(60,60,120,0.16)",
          padding: "2.5rem",
          maxWidth: "420px",
          width: "90vw",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem"
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "#64748b",
            cursor: "pointer",
            zIndex: 2,
          }}
          aria-label="Close"
        >
          ×
        </button>
        <h2 style={{ color: "#4f46e5", marginBottom: "1.5rem", fontSize: "2rem" }}>
          👪 Parent Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            width: "100%",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.9rem 2.2rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "1rem"
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default ParentLoginModal;