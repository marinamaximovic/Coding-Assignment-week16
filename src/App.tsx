import { useState } from "react";
import Header from "./Header";
import AppointmentList from "./AppointmentList";
import { appointments as initialAppointments } from "./testData";
import { Appointment } from "./testData";

// main App component
const App = () => {
  // State to store list of appointments with the type Appointment[]
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  // a state variable is used to manage the input values for adding or editing appointments.
  const [formValues, setFormValues] = useState<Appointment>({
    id: 0,
    clientName: "",
    date: "",
    time: "",
    type: "Consultation",
    completed: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  // handle form input changes and update state with new values
  const handleChange = (event: { target: { name: string; value: string } }) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // handle form submission (either add or update appointment)
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (isEditing) {
      // upddate the existing appointment if in edit mode
      setAppointments(
        appointments.map((appt) =>
          appt.id === formValues.id ? { ...formValues } : appt
        )
      );
    } else {
      // add new appointment to the list
      setAppointments([
        ...appointments,
        { ...formValues, id: appointments.length + 1 },
      ]);
    }

    resetForm();
  };

  // handle appointment edit
  const handleEdit = (id: number) => {
    const appointment = appointments.find((appt) => appt.id === id);
    if (appointment) {
      // pin the 'completed' status of the appointment
      setAppointments(
        appointments.map((appt) =>
          appt.id === id
            ? { ...appt, completed: !appt.completed } // pin the 'completed' state
            : appt
        )
      );

      // if editing, populate the form with the appointment's data
      setFormValues(appointment);
      setIsEditing(true);
    }
  };

  // delete an appointment by its id
  const deleteAppointment = (id: number) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  // reset form values and set isEditing to false
  const resetForm = () => {
    setFormValues({
      id: 0,
      clientName: "",
      date: "",
      time: "",
      type: "Consultation",
      completed: false,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <h2>{isEditing ? "Edit Appointment" : "New Appointment"}</h2>
        <div>
          <label>
            Client Name:
            <input
              type="text"
              name="clientName"
              value={formValues.clientName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formValues.time}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select name="type" value={formValues.type} onChange={handleChange}>
              <option value="Consultation">Consultation</option>
              <option value="Follow-Up">Follow-Up</option>
              <option value="Initial Meeting">Initial Meeting</option>
              <option value="Routine Check">Routine Check</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">
            {isEditing ? "Update" : "Add"} Appointment
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        updateAppointment={handleEdit}
      />
    </div>
  );
};

export default App;
