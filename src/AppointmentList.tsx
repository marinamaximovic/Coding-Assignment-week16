import AppointmentCard from "./AppointmentCard";
import type { Appointment } from "./testData"; //importing the appointment type

//props type
//defining the type for the AppointmentList props
type AppointmentListProps = {
  appointments: Appointment[]; //appointments array
  deleteAppointment: (id: number) => void; // Function to delete an appointment by its ID
  updateAppointment: (id: number) => void; // Function to update an appointment
};

//the component function with typed props
const AppointmentList = ({
  appointments,
  deleteAppointment,
  updateAppointment,
}: AppointmentListProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        //if there are appointments, show them in a container
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id} // React requires a unique key for list items
              {...appointment} // Spread appointment data as props
              deleteAppointment={deleteAppointment} // Pass delete function
              updateAppointment={updateAppointment} // Pass update function
            />
          ))}
        </div>
      ) : (
        <p>No appointments available. Add some to get started!</p>
      )}
    </div>
  );
};

export default AppointmentList;
