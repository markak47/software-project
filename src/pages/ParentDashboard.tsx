// src/pages/ParentDashboard.tsx
import React from "react";

function ParentDashboard() {
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
          👨‍👩‍👧‍👦 Parent Dashboard
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2.2rem",
            color: "#64748b",
            fontSize: "1.1rem",
          }}
        >
          Welcome! Here you can view your child's birthday plans and
          preferences.
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
            style={{
              background: "linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)",
              color: "#fff",
              padding: "0.9rem 2.2rem",
              borderRadius: "10px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              boxShadow: "0 2px 12px rgba(59,130,246,0.10)",
              cursor: "pointer",
              transition: "transform 0.12s, background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📸 Add Child's Picture
          </button>
          <button
            style={{
              background: "linear-gradient(90deg, #34d399 0%, #059669 100%)",
              color: "#fff",
              padding: "0.9rem 2.2rem",
              borderRadius: "10px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              boxShadow: "0 2px 12px rgba(16,185,129,0.10)",
              cursor: "pointer",
              transition: "transform 0.12s, background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Add Favorite Food
          </button>
          <button
            style={{
              background: "linear-gradient(90deg, #f87171 0%, #ef4444 100%)",
              color: "#fff",
              padding: "0.9rem 2.2rem",
              borderRadius: "10px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              boxShadow: "0 2px 12px rgba(239,68,68,0.10)",
              cursor: "pointer",
              transition: "transform 0.12s, background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Add Allergies
          </button>
        </div>
        {/* Future: Add birthday details for assignedChildName */}
      </div>
    </div>
  );
}
export default ParentDashboard;
