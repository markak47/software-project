// src/pages/TeacherLogin.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TeacherLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy logic – implement real auth if needed
    if (username === "teacher" && password === "teacher123") {
      navigate("/teacher-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Teacher Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: "block", margin: "1rem auto" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "1rem auto" }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default TeacherLogin;
