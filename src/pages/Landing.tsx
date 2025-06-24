import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const team = [
    {
      name: "Natalya Yanitska",
      role: "House Management",
      img: "https://sternipark.de/media/images/Museumspl.edfd3d6a.fill-600x360.format-webp.frame-kitas.webp",
      desc: "Alice brings 10 years of early childhood education experience to our daycare.",
    },
    {
      name: "Bob Johnson",
      role: "Assistant Teacher",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      desc: "Bob is passionate about helping children learn and grow in a safe environment.",
    },
    {
      name: "Carol Lee",
      role: "Nutritionist",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      desc: "Carol ensures all our meals are healthy and delicious for every child.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % team.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + team.length) % team.length);

  return (
    <div
      style={{
        minHeight: "250vh",
        background:
          "linear-gradient(to top,rgb(250, 250, 250),rgb(217, 130, 7))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "thinner",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "40px",
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <button onClick={() => navigate("/employee-role")} style={buttonStyle}>
          👩‍🏫 Staff Login
        </button>
        <button
          onClick={() => navigate("/parent-dashboard")}
          style={buttonStyle}
        >
          👪 Parent Login
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "40px",
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <button onClick={() => navigate("/employee-role")} style={buttonStyle}>
          ⏰ Open hours
        </button>
        <button
          onClick={() => navigate("/parent-dashboard")}
          style={buttonStyle}
        >
          📍 Location
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "225px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <h1
          style={{ fontSize: "3.5rem", marginBottom: "1rem", color: "#ffff" }}
        >
          Welcome to the Daycare App
        </h1>
      </div>
      <p
        style={{
          position: "absolute",
          top: "325px",
          fontSize: "1.2rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Your personal assistant for daycare management
      </p>
      <p
        style={{
          position: "absolute",
          top: "500px",
          left: "150px",
          fontSize: "2.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Our Team
      </p>
      {/* Slideshow below Our Team */}
      <div
        style={{
          position: "absolute",
          top: "570px",
          left: "150px",
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "16px",
          padding: "24px 32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          minWidth: "420px",
          minHeight: "220px",
          zIndex: 10,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            marginRight: "16px",
          }}
        >
          &lt;
        </button>
        <img
          src={team[current].img}
          alt={team[current].name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "32px",
            border: "3px solid #fff",
          }}
        />
        <div>
          <h2 style={{ margin: 0, color: "#fff" }}>{team[current].name}</h2>
          <h4 style={{ margin: "4px 0", color: "#ffe082" }}>
            {team[current].role}
          </h4>
          <p style={{ color: "#f5f5f5", maxWidth: "220px" }}>
            {team[current].desc}
          </p>
        </div>
        <button
          onClick={nextSlide}
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            marginLeft: "16px",
          }}
        >
          &gt;
        </button>
      </div>
      <p
        style={{
          position: "absolute",
          top: "950px",
          left: "150px",
          fontSize: "2.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Our Qualifications
      </p>
      <p
        style={{
          position: "absolute",
          top: "1400px",
          left: "150px",
          fontSize: "2.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Educational Activities & Tools
      </p>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 0.5rem",
  fontFamily: "Roboto, sans-serif",
  fontWeight: "bold",
  fontSize: "1rem",
  background: "rgba(255, 255, 255, 0.2)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "background 0.3s",
};

export default Login;
