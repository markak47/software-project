import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function ManageEmployees() {
  const navigate = useNavigate();
  const { users, updateAttendance } = useUserContext();
  const employees = users.filter((user) => user.role !== "parent");

  const handleApprove = (username: string, currentStatus: string) => {
    // Ensure "Late" and "Absent" statuses can be approved
    const statusToApprove = currentStatus === "Late" ? "Late" : "Absent";
    updateAttendance(username, statusToApprove, true);
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
            backgroundColor:
              emp.status === "Absent"
                ? "#fef2f2"
                : emp.status === "Late"
                ? "#fef9c3"
                : "#ecfdf5",
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
                color:
                  emp.status === "Absent"
                    ? "#dc2626"
                    : emp.status === "Late"
                    ? "#ca8a04"
                    : "#16a34a",
                fontWeight: "bold",
              }}
            >
              {emp.status || "Present"}
            </span>
            {emp.approvedStatus && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: emp.status === "Late" ? "#ca8a04" : "#16a34a",
                }}
              >
                {emp.status === "Late"
                  ? "🕒 Approved Lateness"
                  : "✅ Approved Absence"}
              </span>
            )}
          </p>

          {["Absent", "Late"].includes(emp.status || "") &&
            !emp.approvedStatus && (
              <button
                onClick={() =>
                  handleApprove(emp.username, emp.status || "Absent")
                }
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
                ✅ Approve {emp.status}
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
