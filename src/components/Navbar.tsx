import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎂 Birthday Planner</h2>
      <div className="nav-links">
        <NavLink
          to="."
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          View Birthdays
        </NavLink>
        <NavLink
          to="add"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          Add Birthday
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
