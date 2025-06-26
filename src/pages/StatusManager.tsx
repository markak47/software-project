import { useContext } from "react";
import { TeacherStatusContext } from "../context/TeacherStatusContext";

function StatusManager() {
  const { reports, updateReport, deleteReport } =
    useContext(TeacherStatusContext);

  const handleUpdate = (id: number) => {
    const newStatus = prompt("Update status (illness, lateness, or other):");
    const allowed = ["illness", "lateness", "other"];

    if (newStatus && allowed.includes(newStatus)) {
      updateReport(id, { status: newStatus as any });
    } else {
      alert("Invalid status. Use: illness, lateness, or other.");
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete this report?")) {
      deleteReport(id);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{ fontSize: "1.8rem", marginBottom: "1rem", color: "#1d4ed8" }}
      >
        📋 Manage Teacher Status Reports
      </h2>
      {reports.length === 0 ? (
        <p>No reports submitted yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {reports.map((r) => (
            <li
              key={r.id}
              style={{
                background: "#f9fafb",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <p>
                <strong>Teacher:</strong> {r.name}
              </p>
              <p>
                <strong>Status:</strong> {r.status}
              </p>
              <p>
                <strong>Date:</strong> {new Date(r.date).toLocaleDateString()}
              </p>
              <p>
                <strong>details:</strong> {r.details}
              </p>
              <div style={{ marginTop: "0.5rem" }}>
                <button
                  onClick={() => handleUpdate(r.id)}
                  style={btnStyle("#facc15")}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  style={btnStyle("#ef4444")}
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const btnStyle = (bg: string): React.CSSProperties => ({
  padding: "0.4rem 0.8rem",
  backgroundColor: bg,
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  marginRight: "0.5rem",
});

export default StatusManager;
