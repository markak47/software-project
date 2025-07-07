import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TeacherStatusContext } from "../context/TeacherStatusContext";

function TeacherReportList() {
  const { reports } = useContext(TeacherStatusContext);
  const [params] = useSearchParams();
  const teacherName = params.get("teacher");

  const filteredReports = reports.filter((r) => r.name === teacherName);

  return (
    <div
      style={{
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)",
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          marginBottom: "2rem",
          color: "#1e3a8a",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        📄 Reports for{" "}
        <span style={{ color: "#0f172a" }}>{teacherName || "?"}</span>
      </h2>

      {filteredReports.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            color: "#475569",
          }}
        >
          No reports submitted by this teacher.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            maxWidth: "750px",
            margin: "0 auto",
          }}
        >
          {filteredReports.map((report) => (
            <div
              key={report.id}
              style={{
                background: "#ffffff",
                padding: "1.7rem",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                borderLeft: "6px solid #60a5fa",
              }}
            >
              <p style={infoText}>
                <strong>📌 Status:</strong> {report.status}
              </p>
              <p style={infoText}>
                <strong>📝 Details:</strong>{" "}
                {report.details ? report.details : "—"}
              </p>
              <p style={infoText}>
                <strong>📅 Date:</strong>{" "}
                {new Date(report.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const infoText: React.CSSProperties = {
  margin: "0.5rem 0",
  fontSize: "1.2rem",
  color: "#1e293b",
};

export default TeacherReportList;
