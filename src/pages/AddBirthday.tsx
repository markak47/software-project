import { useState, useContext } from "react";
import { BirthdayContext } from "../context/BirthdayContext";
import { useNavigate } from "react-router-dom";

function AddBirthday() {
  const [name, setName] = useState("");
  const [group, setGroup] = useState<"Preschool" | "Kindergarten" | "Toddler">(
    "Preschool"
  );
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [plan, setPlan] = useState("");

  const { addBirthday } = useContext(BirthdayContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBirthday = {
      id: Date.now(),
      name,
      group,
      teacher,
      date,
      plan,
    };

    addBirthday(newBirthday);
    navigate("/birthdays");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #bfdbfe)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#1d4ed8",
        }}
      >
        Add a Birthday 😄
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          placeholder="Child's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <select
          value={group}
          onChange={(e) =>
            setGroup(e.target.value as "Preschool" | "Kindergarten" | "Toddler")
          }
          required
          style={inputStyle}
        >
          <option value="Preschool">Preschool</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="Toddler">Toddler</option>
        </select>

        <input
          type="text"
          placeholder="Assigned Teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Celebration Plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "0.8rem",
            fontSize: "1.1rem",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Add Birthday
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.7rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outlineColor: "#3b82f6",
};

export default AddBirthday;
