// src/pages/BirthdayPlanner.tsx
import BirthdayList from "./BirthdayList";
import AddBirthday from "./AddBirthday";
import Navbar from "../components/Navbar";

function BirthdayPlanner() {
  return (
    <>
      <Navbar />
      <main>
        <BirthdayList />
        <AddBirthday />
      </main>
    </>
  );
}

export default BirthdayPlanner;
