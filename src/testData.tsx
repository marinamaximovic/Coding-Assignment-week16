//the type for an appointment
export type Appointment = {
  id: number;
  clientName: string;
  date: string;
  time: string;
  type: string;
  completed: boolean;
};

//array of test appointments
export const appointments: Appointment[] = [
  {
    id: 1,
    clientName: "Susane Smith",
    date: "2024-11-10",
    time: "10:00 AM",
    type: "Consultation",
    completed: false,
  },
  {
    id: 2,
    clientName: "Nicole Stivenson",
    date: "2024-11-12",
    time: "1:30 PM",
    type: "Follow-Up",
    completed: true,
  },
  {
    id: 3,
    clientName: "John Williams",
    date: "2024-11-14",
    time: "3:00 PM",
    type: "Initial Meeting",
    completed: false,
  },
  {
    id: 4,
    clientName: "Alice Davis",
    date: "2024-11-16",
    time: "9:00 AM",
    type: "Routine Check",
    completed: true,
  },
];
