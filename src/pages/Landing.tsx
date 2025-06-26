// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // Import the CSS
import React, { useState } from "react";
import DaycareTimeline from "../components/Timeline"; 

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/employee-role")}>Staff Login
      </button>
      <button onClick={() => navigate("/parent-dashboard")}>
        Parent Login
      </button>
      <h1>🎉 Welcome to Daycare App 👶</h1>
    <div
      style={{
        minHeight: "250vh",
        background:
          "linear-gradient(to top,rgb(253, 167, 133),rgb(253, 154, 77))",
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
          Staff Login
        </button>
        <button onClick={() => navigate("/parent-login")} style={buttonStyle}>
          Parent Login
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
              "https://www.google.de/maps/dir//Museumspl.+1,+21073+Hamburg/@53.4585604,9.9721184,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b191af00525999:0xe069898cd8f129ec!2m2!1d9.9772683!2d53.4585541?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            )
          }
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
          style={{ fontSize: "4rem", marginBottom: "1.5rem", color: "#ffff" }}
        >
          Welcome to the Daycare App
        </h1>
      </div>
      <p
        style={{
          position: "absolute",
          top: "325px",
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
            width: "200px",
            height: "200px",
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
          top: "570px",
          right: "150px",
          width: "40%", 
          display: "table-cell", 
          fontFamily: "Georgia, serif",
          fontSize: "1.5rem",
          color: "#f5f5f5",
          margin: 0,
          fontWeight: 300,
        }}
      >
        "Since 2014, the Museumsplatz daycare has been located in a historic building near Harburg Town Hall and offers
        space for around 350 children across ten groups. The spacious facility includes highlights like the grand “Meistersaal” 
        for climbing and play, regular excursions, and creative activities. We place a strong emphasis on language development 
        and inclusion. As a certified “House of Little Scientists,” we focus on early STEM education and sustainability, 
        recognized with the KITA21 award. Children enjoy a paddling room, swimming lessons in our own teaching pool, 
        and multi-day trips to the seaside. Healthy, fresh organic meals complete our holistic care concept"
      </p>
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
        Activities & Ressources
      </p>
  <div
    style={{
      marginTop: "1100px",
      width: "80%",
      maxWidth: "1000px",
    }}
> 
      <DaycareTimeline />
    </div>
  </div>
  );
}

export default Landing;
