type Props = {
  name: string;
  group: "Preschool" | "Kindergarten" | "Toddler";
  teacher: string;
  date: string;
  plan: string;
  favFood?: string;
  allergies?: string;
  picture?: string; // base64 or URL
  highlight?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
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

function BirthdayCard({
  name,
  group,
  teacher,
  date,
  plan,
  favFood,
  allergies,
  picture,
  highlight,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "12px",
        padding: "1rem",
        marginBottom: "1rem",
        backgroundColor: highlight ? "#d1fae5" : "#fffbe6",
        maxWidth: "500px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      {picture && (
        <img
          src={picture}
          alt={`${name}'s photo`}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "64px",
            height: "64px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #ccc",
          }}
        />
      )}

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
        <strong>Teacher:</strong> {teacher}
      </p>
      <p>
        <strong>Date:</strong> {new Date(date).toDateString()}
      </p>
      <p>
        <strong>Plan:</strong> {plan}
      </p>
      {favFood && (
        <p>
          <strong>Fav Food:</strong> {favFood}
        </p>
      )}
      {allergies && (
        <p>
          <strong>Allergies:</strong> {allergies}
        </p>
      )}

      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
        {onDelete && (
          <button
            onClick={onDelete}
            style={{
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
        {onEdit && (
          <button
            onClick={onEdit}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#facc15",
              color: "#111",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default BirthdayCard;
