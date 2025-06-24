// BirthdayCard.tsx
// Contains the format of the birthday card.

type Props = {
  name: string;
  group: "Preschool" | "Kindergarten" | "Toddler";
  teacher: string; // ✅ add this line
  date: string;
  plan: string;
  highlight?: boolean;
  onDelete?: () => void;
};

function calculateAge(birthDateStr: string): number {
  const today = new Date();
  const birthDate = new Date(birthDateStr);
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

function BirthdayCard({ name, group, date, plan, highlight, onDelete }: Props) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: highlight ? "#d1fae5" : "#fffbe6", // light green or cream
        maxWidth: "500px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{ color: highlight ? "#059669" : "#ff6f61", fontSize: "1.5rem" }}
      >
        {name} {highlight && "🎁"}
      </h3>

      <p>
        <strong>Age:</strong> {calculateAge(date)} years
      </p>
      <p>
        <strong>Group:</strong> {group}
      </p>
      <p>
        <strong>Date:</strong> {new Date(date).toDateString()}
      </p>
      <p>
        <strong>Plan:</strong> {plan}
      </p>

      {onDelete && (
        <button
          onClick={onDelete}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default BirthdayCard;
