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
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.3s ease-in-out",
      }}
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        style={{
          background: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
          padding: "2.5rem",
          maxWidth: "420px",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          textAlign: "center",
          position: "relative",
          transform: "scale(1)",
          transition: "transform 0.2s ease",
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
            color: "#475569",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Heading */}
        <h2 style={{ color: "#0ea5e9", fontSize: "1.8rem", fontWeight: 700 }}>
          👪 Parent Login
        </h2>

        {/* Input fields */}
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
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
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
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "0.9rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(14,165,233,0.3)",
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

export default ParentLoginModal;
