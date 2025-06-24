// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // Import the CSS

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🎉 Welcome to Daycare App 👶</h1>
      <p>Please choose your role to continue</p>
      <button onClick={() => navigate("/employee-role")}>Staff Login</button>
      <button onClick={() => navigate("/parent-dashboard")}>
        Parent Login
      </button>
    </div>
  );
}

export default Landing;
