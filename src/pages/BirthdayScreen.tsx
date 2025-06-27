import { useLocation } from "react-router-dom";

function BirthdayScreen() {
  const location = useLocation();
  const state = location.state as {
    name: string;
    picture?: string;
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #fcd34d, #f87171)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉🎂🎈</h1>

      {state.picture && (
        <img
          src={state.picture}
          alt="Birthday Kid"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "10px solid white",
            boxShadow: "0 0 30px rgba(0,0,0,0.2)",
            marginBottom: "2rem",
          }}
        />
      )}

      <h2 style={{ fontSize: "3rem", color: "#fff", marginBottom: "1rem" }}>
        {state.name}
      </h2>

      <h1 style={{ fontSize: "5rem", color: "#fff" }}>🎁🥳🎈</h1>
    </div>
  );
}

export default BirthdayScreen;
