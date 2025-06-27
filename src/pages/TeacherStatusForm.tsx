// ✅ TeacherStatusForm.tsx
import { useState, useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";
import { useUserContext } from "../context/UserContext"; // ✅ Add this
import { useNavigate } from "react-router-dom";

function TeacherStatusForm() {
  const [statusType, setStatusType] = useState<"Absent" | "Late" | "other">(
    "Absent"
  );
  const [details, setDetails] = useState("");

  const { submitStatus } = useContext(TeacherStatusContext);
  const { updateAttendance } = useUserContext(); // ✅ Get updateAttendance
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.username) return alert("Not logged in");

    // ✅ Update status in the attendance system
    if (statusType === "Absent" || statusType === "Late") {
      updateAttendance(user.username, statusType);
    }

    // ✅ Submit the report (for manager view)
    submitStatus({
      name: user.username,
      status: statusType,
      details,
    });

    navigate("/dashboard/teacher/status-report/manage", { replace: true });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ color: "#2563eb", fontSize: "1.5rem" }}>
        📋 Submit Status Report
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <label>Status Type</label>
        <select
          value={statusType}
          onChange={(e) => setStatusType(e.target.value as any)}
          style={{ padding: "0.5rem", borderRadius: "8px" }}
        >
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
          <option value="other">Other</option>
        </select>

        <label>Optional Details</label>
        <textarea
          placeholder="Details (optional)..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          style={{
            resize: "none",
            borderRadius: "8px",
            padding: "0.5rem",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "0.6rem",
            background: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ✅ Submit
        </button>
      </form>
    </div>
  );
}

export default TeacherStatusForm;
