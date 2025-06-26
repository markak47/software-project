import { useNavigate } from "react-router-dom";
import { sampleUsers } from "../data/sampleUsers";

function ManageEmployees() {
  const navigate = useNavigate();
  const employees = sampleUsers.filter((user) => user.role !== "parent");

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
          }}
        >
          <p>
            <strong>Username:</strong> {emp.username}
          </p>
          <p>
            <strong>Role:</strong> {emp.role}
          </p>
          <p>
            <strong>Password:</strong> {emp.password}
          </p>

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
