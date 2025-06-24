import { useContext, useState } from "react";
import { BirthdayContext } from "../context/BirthdayContext";
import BirthdayCard from "../components/BirthdayCard";
import "./BirthdayList.css";

function isUpcoming(dateStr: string): boolean {
  const today = new Date();
  const birthDate = new Date(dateStr);

  let upcoming = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (upcoming < today) {
    upcoming = new Date(
      today.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate()
    );
  }

  const diffTime = upcoming.getTime() - today.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= 7;
}

function BirthdayList() {
  const { birthdays, deleteBirthday } = useContext(BirthdayContext);

  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const filteredBirthdays = birthdays
    .filter((b) => (selectedGroup ? b.group === selectedGroup : true))
    .filter((b) => (selectedTeacher ? b.teacher === selectedTeacher : true))
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const today = new Date();

      const nextA = new Date(
        today.getFullYear(),
        dateA.getMonth(),
        dateA.getDate()
      );
      const nextB = new Date(
        today.getFullYear(),
        dateB.getMonth(),
        dateB.getDate()
      );

      if (nextA < today) nextA.setFullYear(today.getFullYear() + 1);
      if (nextB < today) nextB.setFullYear(today.getFullYear() + 1);

      return nextA.getTime() - nextB.getTime();
    });

  return (
    <div className="birthday-list-container">
      <h2 className="birthday-title">🎉 Upcoming Birthdays 🎉</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">All Groups</option>
          <option value="Preschool">Preschool</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="Toddler">Toddler</option>
        </select>

        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
        >
          <option value="">All Teachers</option>
          {[...new Set(birthdays.map((b) => b.teacher))].map((teacher) => (
            <option key={teacher} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
      </div>

      <div className="birthday-list">
        {filteredBirthdays.map((b) => (
          <BirthdayCard
            key={b.id}
            name={b.name}
            group={b.group}
            teacher={b.teacher}
            date={b.date}
            plan={b.plan}
            highlight={isUpcoming(b.date)}
            onDelete={() => deleteBirthday(b.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BirthdayList;
