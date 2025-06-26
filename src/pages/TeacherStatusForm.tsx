import { useState, useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";
import { useNavigate } from "react-router-dom";

function TeacherStatusForm() {
  const [statusType, setStatusType] = useState<
    "illness" | "lateness" | "other"
  >("illness");
  const [details, setDetails] = useState("");

  const { submitStatus } = useContext(TeacherStatusContext);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.username) {
      alert("Not logged in");
      return;
    }

    submitStatus({
      name: user.username,
      status: statusType,
      details,
    });

    navigate("/dashboard/teacher/status-report/manage");
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
        <select
          value={statusType}
          onChange={(e) => setStatusType(e.target.value as any)}
        >
          <option value="illness">Illness</option>
          <option value="lateness">Lateness</option>
          <option value="other">Other</option>
        </select>

        <textarea
          placeholder="Optional details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          style={{ resize: "none" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.6rem",
            background: "#3b82f6",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TeacherStatusForm;
