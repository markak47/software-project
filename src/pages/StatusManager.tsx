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
    <div
      style={{
        padding: "3rem 1.5rem",
        fontFamily: "system-ui, sans-serif",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#1d4ed8",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        🗂️ Manage Teacher Status Reports
      </h2>

      {reports.length === 0 ? (
        <p
          style={{ textAlign: "center", color: "#64748b", fontSize: "1.1rem" }}
        >
          No reports submitted yet.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {reports.map((r) => (
            <div
              key={r.id}
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                borderLeft: "6px solid #60a5fa",
              }}
            >
              <p style={infoText}>
                <strong>👩‍🏫 Teacher:</strong> {r.name}
              </p>
              <p style={infoText}>
                <strong>📌 Status:</strong> {r.status}
              </p>
              <p style={infoText}>
                <strong>📅 Date:</strong>{" "}
                {new Date(r.date).toLocaleDateString()}
              </p>
              <p style={infoText}>
                <strong>📝 Details:</strong> {r.details || "—"}
              </p>
              <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => handleUpdate(r.id)}
                  style={btnStyle("#fbbf24")}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const infoText: React.CSSProperties = {
  margin: "0.3rem 0",
  fontSize: "1rem",
  color: "#334155",
};

const btnStyle = (bg: string): React.CSSProperties => ({
  padding: "0.6rem 1.2rem",
  backgroundColor: bg,
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "1rem",
  transition: "transform 0.1s ease",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  whiteSpace: "nowrap",
  lineHeight: 1.2,
});

export default StatusManager;
