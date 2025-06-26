import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { TeacherStatusContext } from "../context/TeacherStatusContext";

function TeacherReportList() {
  const { reports } = useContext(TeacherStatusContext);
  const [params] = useSearchParams();
  const teacherName = params.get("teacher");

  const filteredReports = reports.filter((r) => r.name === teacherName);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>
        📄 Status Reports for <em>{teacherName}</em>
      </h2>
      {filteredReports.length === 0 ? (
        <p>No reports submitted by this teacher.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredReports.map((report) => (
            <li
              key={report.id}
              style={{
                marginBottom: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <p>
                <strong>Status:</strong> {report.status}
              </p>
              <p>
                <strong>Details:</strong> {report.details}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(report.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeacherReportList;
