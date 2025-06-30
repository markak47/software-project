import { useNavigate } from "react-router-dom";
import React from "react";

interface Props {
  show: boolean;
  onClose: () => void;
  onTeacher: () => void;
  onManager: () => void;
}

const EmployeeRoleModal: React.FC<Props> = ({
  show,
  onClose,
  onTeacher,
  onManager,
}) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "400px",
          width: "90%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#1e3a8a",
            marginBottom: "1.5rem",
          }}
        >
          Select Your Role
        </h2>

        <button
          onClick={onTeacher}
          style={{
            marginBottom: "1rem",
            width: "100%",
            padding: "0.9rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg, #16a34a 0%, #2563eb 100%)",
            color: "#fff",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          👩‍🏫 I am a Teacher
        </button>

        <button
          onClick={onManager}
          style={{
            marginTop: "0.5rem",
            width: "100%",
            padding: "0.9rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg, #818cf8 0%, #c084fc 100%)",
            color: "#fff",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          👨‍💼 I am a Manager
        </button>
      </div>
    </div>
  );
};

export default EmployeeRoleModal;
