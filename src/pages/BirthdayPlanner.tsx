// src/pages/BirthdayPlanner.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function BirthdayPlanner() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}

export default BirthdayPlanner;
