import { useState, useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function TeacherStatusForm() {
  const [statusType, setStatusType] = useState<"Absent" | "Late" | "other">(
    "Absent"
  );
  const [details, setDetails] = useState("");

  const { submitStatus } = useContext(TeacherStatusContext);
  const { updateAttendance } = useUserContext();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.username) return alert("Not logged in");

    if (statusType === "Absent" || statusType === "Late") {
      updateAttendance(user.username, statusType);
    }

    submitStatus({
      name: user.username,
      status: statusType,
      details,
    });

    navigate("/dashboard/teacher/status-report/manage", { replace: true });
  };

  return (
    <div
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#2563eb",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.5rem",
        }}
      >
        📝 Submit Status Report
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          background: "#f8fafc",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <label style={{ fontWeight: 600, color: "#334155" }}>Status Type</label>
        <select
          value={statusType}
          onChange={(e) => setStatusType(e.target.value as any)}
          style={{
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
          }}
        >
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
          <option value="other">Other</option>
        </select>

        <label style={{ fontWeight: 600, color: "#334155" }}>
          Optional Details
        </label>
        <textarea
          placeholder="Details (optional)..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          style={{
            resize: "none",
            borderRadius: "8px",
            padding: "0.75rem",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.9rem",
            background: "linear-gradient(to right, #3b82f6, #60a5fa)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "transform 0.15s ease",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1.03)")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.transform = "scale(1)")
          }
        >
          ✅ Submit
        </button>
      </form>
    </div>
  );
}

export default TeacherStatusForm;
