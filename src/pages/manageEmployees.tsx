import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function ManageEmployees() {
  const navigate = useNavigate();
  const { users, updateAttendance } = useUserContext();
  const employees = users.filter((user) => user.role !== "parent");

  const handleApprove = (username: string) => {
    updateAttendance(username, "Absent", true); // ✅ Approving absence
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        🧑‍💼 Manage Employees
      </h2>
      {employees.map((emp) => (
        <div
          key={emp.username}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: emp.status === "Absent" ? "#fef2f2" : "#ecfdf5",
          }}
        >
          <p>
            <strong>Username:</strong> {emp.username}
          </p>
          <p>
            <strong>Role:</strong> {emp.role}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color: emp.status === "Absent" ? "#dc2626" : "#16a34a",
                fontWeight: "bold",
              }}
            >
              {emp.status || "Present"}
            </span>
            {emp.status === "Absent" && emp.absenceApproved && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontWeight: "bold",
                  color: "#16a34a",
                }}
              >
                ✅ Approved
              </span>
            )}
          </p>

          {emp.status === "Absent" && !emp.absenceApproved && (
            <button
              onClick={() => handleApprove(emp.username)}
              style={{
                marginRight: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              ✅ Approve Absence
            </button>
          )}

          {emp.role === "teacher" && (
            <button
              onClick={() =>
                navigate(`/dashboard/manager/reports?teacher=${emp.username}`)
              }
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              📄 View Reports
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ManageEmployees;
