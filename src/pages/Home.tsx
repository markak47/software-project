import { Link } from "react-router-dom";
import "./Home.css"; // we’ll create this in a sec

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Birthday Planner 🎂</h1>
      <p className="home-subtitle">
        Organize upcoming birthday celebrations with ease!
      </p>

      <div className="home-buttons">
        <Link to="/birthdays">
          <button className="home-button">🎉 View Birthdays</button>
        </Link>
        <Link to="/add">
          <button className="home-button"> Add Birthday</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
