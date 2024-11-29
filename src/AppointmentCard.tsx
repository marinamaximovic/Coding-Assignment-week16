import type { Appointment } from "./testData"; // Importing the Appointment type for type safety

// //defining the props type for the AppointmentCard component
type AppointmentCardProps = Appointment & {
  deleteAppointment: (id: number) => void;
  updateAppointment: (id: number) => void;
};

// the AppointmentCard component displays information about a single appointment
const AppointmentCard = ({
  id,
  clientName,
  date,
  time,
  type,
  completed,
  deleteAppointment,
  updateAppointment,
}: AppointmentCardProps) => {
  return (
    <div
      className="appointment-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: completed ? "#e6ffe6" : "#fff", // Change background if completed
      }}
    >
      <h3>{clientName}</h3>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: completed ? "green" : "red" }}>
          {completed ? "Completed" : "Pending"}
        </span>
      </p>
      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => deleteAppointment(id)}
          style={{
            marginRight: "8px",
            padding: "8px 12px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
        <button
          onClick={() => updateAppointment(id)}
          style={{
            padding: "8px 12px",
            backgroundColor: completed ? "#1890ff" : "#52c41a",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {completed ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
