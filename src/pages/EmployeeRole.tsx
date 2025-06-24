// src/pages/EmployeeRole.tsx
import { useNavigate } from "react-router-dom";

function EmployeeRole() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h2>Select your role</h2>
      <button
        onClick={() => navigate("/teacher-login")}
        style={{ margin: "1rem" }}
      >
        👩‍🏫 I am a Teacher
      </button>
      <button
        onClick={() => navigate("/manager-dashboard")}
        style={{ margin: "1rem" }}
      >
        👩‍💼 I am the Manager
      </button>
    </div>
  );
}

export default EmployeeRole;
