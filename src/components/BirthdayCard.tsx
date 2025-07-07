import React from "react";

interface BirthdayCardProps {
  name: string;
  group: string;
  teacher: string;
  date: string;
  plan: string;
  favFood?: string;
  allergies?: string;
  message?: string;
  picture?: string;
  highlight?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onScreen?: () => void; // ✅ New prop
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({
  name,
  group,
  teacher,
  date,
  plan,
  favFood,
  allergies,
  message,
  picture,
  highlight,
  onEdit,
  onDelete,
  onScreen, // ✅ New prop
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: highlight ? "#d1fae5" : "#e0f2fe",
    border: "2px solid #cbd5e1",
    borderRadius: "12px",
    padding: "1.5rem",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    position: "relative",
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
  };

  const imageStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginLeft: "1.5rem",
    border: "3px solid #94a3b8",
    backgroundColor: "#fff",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
  };

  return (
    <div style={cardStyle}>
      <div style={textStyle}>
        <h3
          style={{
            fontSize: "1.5rem",
            color: "#047857",
            marginBottom: "0.5rem",
          }}
        >
          {name} 🎁
        </h3>
        <p>
          <strong>Age:</strong>{" "}
          {new Date().getFullYear() - new Date(date).getFullYear()} years
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
            <strong>Favorite Food:</strong> {favFood}
          </p>
        )}
        {allergies && (
          <p>
            <strong>Allergies:</strong> {allergies}
          </p>
        )}
        {message && (
          <p>
            <strong>Note:</strong> {message}
          </p>
        )}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {onDelete && (
            <button
              onClick={onDelete}
              style={{
                ...buttonStyle,
                backgroundColor: "#ef4444",
                color: "white",
              }}
            >
              Delete
            </button>
          )}
          {onEdit && (
            <button
              onClick={onEdit}
              style={{
                ...buttonStyle,
                backgroundColor: "#facc15",
                color: "black",
              }}
            >
              Edit
            </button>
          )}
          {onScreen && (
            <button
              onClick={onScreen}
              style={{
                ...buttonStyle,
                backgroundColor: "#facc15",
                color: "black",
              }}
            >
              🎬 Screen
            </button>
          )}
        </div>
      </div>

      {picture && <img src={picture} alt="child" style={imageStyle} />}
    </div>
  );
};

export default BirthdayCard;
