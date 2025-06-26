import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function ManageEmployees() {
  const navigate = useNavigate();
  const { users, updateAttendance } = useUserContext();
  const employees = users.filter((user) => user.role !== "parent");

  const handleApprove = (username: string, currentStatus: string) => {
    console.log("Approving:", username, currentStatus);
    updateAttendance(username, currentStatus as any, true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        🧑‍💼 Manage Employees
      </h2>
      {employees.map((emp) => {
        const isPendingApproval =
          ["Absent", "Late"].includes(emp.status || "") &&
          emp.approvedStatus !== emp.status;

        return (
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
              {emp.approvedStatus === "Late" && emp.status === "Late" && (
                <span
                  style={{
                    marginLeft: "0.5rem",
                    color: "#ca8a04",
                    fontWeight: "bold",
                  }}
                >
                  🕒 Approved Lateness
                </span>
              )}
              {emp.approvedStatus === "Absent" && emp.status === "Absent" && (
                <span
                  style={{
                    marginLeft: "0.5rem",
                    color: "#16a34a",
                    fontWeight: "bold",
                  }}
                >
                  ✅ Approved Absence
                </span>
              )}
            </p>

            {isPendingApproval && (
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
        );
      })}
      a
    </div>
  );
}

export default ManageEmployees;
