import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BirthdayContext } from "../context/BirthdayContext";

function EditBirthday() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { birthdays, updateBirthday } = useContext(BirthdayContext);

  const birthday = birthdays.find((b) => b.id === Number(id));

  const [name, setName] = useState("");
  const [group, setGroup] = useState<"Preschool" | "Kindergarten" | "Toddler">(
    "Preschool"
  );
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [plan, setPlan] = useState("");
  const [favFood, setFavFood] = useState("");
  const [allergies, setAllergies] = useState("");

  useEffect(() => {
    if (birthday) {
      setName(birthday.name);
      setGroup(birthday.group);
      setTeacher(birthday.teacher);
      setDate(birthday.date);
      setPlan(birthday.plan);
      setFavFood(birthday.favFood || "");
      setAllergies(birthday.allergies || "");
    }
  }, [birthday]);

  if (!birthday) {
    return (
      <p style={{ padding: "2rem", textAlign: "center" }}>
        Birthday not found.
      </p>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updated = {
      ...birthday,
      name,
      group,
      teacher,
      date,
      plan,
      favFood,
      allergies,
    };

    updateBirthday(updated);
    navigate(-1); // Go back
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f2fe, #bae6fd)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#0284c7" }}>
        ✏️ Edit Birthday
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

        <input
          type="text"
          placeholder="Favorite Food"
          value={favFood}
          onChange={(e) => setFavFood(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Allergies"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
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
          Save Changes
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

export default EditBirthday;
