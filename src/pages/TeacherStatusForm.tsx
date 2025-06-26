import { useState, useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function TeacherStatusForm() {
  const [statusType, setStatusType] = useState<
    "illness" | "lateness" | "other"
  >("illness");
  const [details, setDetails] = useState("");

  const { submitStatus } = useContext(TeacherStatusContext);
  const { updateAttendance } = useUserContext();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.username) {
      alert("Not logged in");
      return;
    }

    // ✅ Update attendance based on report
    if (statusType === "illness") {
      updateAttendance(user.username, "Absent");
    } else if (statusType === "lateness") {
      updateAttendance(user.username, "Late");
    } else {
      updateAttendance(user.username, "Present");
    }

    // ✅ Submit the actual status report (no id/date, they are handled inside context)
    submitStatus({
      name: user.username,
      status: statusType,
      details,
    });

    // ✅ Navigate after successful submission
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
          <option value="illness">Illness</option>
          <option value="lateness">Lateness</option>
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
