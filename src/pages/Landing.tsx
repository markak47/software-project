import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAttendance } from "../hooks/useAttendance";
import DaycareTimeline from "../components/TimeLine"; // Make sure this import exists
import myPhoto from "../assets/Ali.JPG";

function Login() {
  const navigate = useNavigate();

  const team = [
    {
      name: "Natalya Yanitska",
      username: "natalya",
      role: "House Management",
      img: "https://sternipark.de/media/images/Museumspl.edfd3d6a.fill-600x360.format-webp.frame-kitas.webp",
      desc: "Alice brings 10 years of early childhood education experience to our daycare.",
    },
    {
      name: "Ali Calmac",
      username: "ali",
      role: "Assistant Teacher",
      img: myPhoto,
      desc: "Ali is passionate about children learn and grow in a safe environment.",
    },
    {
      name: "Carol Lee",
      username: "carol",
      role: "Nutritionist",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      desc: "Carol ensures all our meals are healthy and delicious for every child.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const isPresent = useAttendance(team[current].name);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % team.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + team.length) % team.length);

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        background:
          "linear-gradient(to top,rgba(186, 141, 236, 0.81),rgb(217, 130, 7))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 300,
        padding: "2rem",
        gap: "3rem",
        color: "#f5f5f5",
      }}
    >
      {/* Navigation Buttons */}
      <div
        style={{
          position: "absolute",
          top: "1.5%",
          right: "2%",
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <button onClick={() => navigate("/employee-role")} style={buttonStyle}>
          Staff Login
        </button>
        <button onClick={() => navigate("/parent-login")} style={buttonStyle}>
          Parent Login
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          top: "1.5%",
          left: "2%",
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <button
          onClick={() =>
            window.open(
              "https://sternipark.de/de/kitas/standorte/museumsplatz/"
            )
          }
          style={buttonStyle}
        >
          ⏰ Open hours
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.google.de/maps/dir//Museumspl.+1,+21073+Hamburg/@53.4585604,9.9721184,16z"
            )
          }
          style={buttonStyle}
        >
          📍 Location
        </button>
      </div>

      <div
        style={{
          position: "relative",
          top: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        <h1
          style={{ fontSize: "4rem", marginBottom: "1rem", color: "#ffff" }}
        >
          Welcome to the Daycare App
        </h1>
      </div>

      <p
        style={{
          position: "relative",
          top: "200px",
          fontSize: "1.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Your personal assistant for daycare management
      </p>

      <p
        style={{
          position: "relative",
          top: "330px",
          left: "-41%",
          fontSize: "2.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Our Team
      </p>

      {/* Slideshow */}
      <div
        style={{
          position: "relative",
          top: "290px",
          left: "-20%",
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "5%",
          padding: "2% 5%",
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
            width: "205px",
            height: "205px",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  isPresent === "Present" ? "#22c55e" : "#f87171",
                marginRight: "8px",
              }}
            ></span>
            <span style={{ color: "#fff" }}>{isPresent}</span>
          </div>
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

      {/* Daycare description */}
      <p
        style={{
          position: "relative",
          top: "-25px",
          right: "-28%",
          width: "35%",
          display: "table-cell",
          fontFamily: "Georgia, serif",
          fontSize: "2rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        "Since 2014, the Museumsplatz daycare has been located in a historic
        building near Harburg Town Hall and offers space for around 350 children
        across ten groups. The spacious facility includes highlights like the
        grand “Meistersaal” for climbing and play, regular excursions, and
        creative activities. We place a strong emphasis on language development
        and inclusion. As a certified “House of Little Scientists,” we focus on
        early STEM education and sustainability, recognized with the KITA21
        award. Children enjoy a paddling room, swimming lessons in our own
        teaching pool, and multi-day trips to the seaside. Healthy, fresh
        organic meals complete our holistic care concept."
      </p>

      {/* Timeline heading */}
      <p
        style={{
          position: "relative",
          top: "100px",
          left: "-35%",
          fontSize: "2.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        Activities & Resources
      </p>

      {/* Timeline component */}
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          maxWidth: "1200px",
          color: "#000000",
        }}
      >
        <DaycareTimeline />
      </div>
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
