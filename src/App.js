import "./App.css";
import { TableData } from "./components/table-data";
export default function App() {
  const columns = [
    { accessor: "name", label: "Name" },
    { accessor: "email", label: "Email" },
    { accessor: "age", label: "Age" },
    { accessor: "years_of_experience", label: "Years of experience" },
    { accessor: "position_applied", label: "Position applied" },
    { accessor: "date_of_application", label: "Date of application" },
    { accessor: "status_of_application", label: "Status of the application" },
  ];

  const rows = [
    {
      id: 1,
      name: "Liz Lemon",
      email: "me.yamini.01@gmail.com",
      age: 36,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 2,
      name: "Jack Donaghy",
      email: "me.yamini.01@gmail.com",
      age: 40,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 3,
      name: "Tracy Morgan",
      email: "me.yamini.01@gmail.com",
      age: 39,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 4,
      name: "Jenna Maroney",
      email: "me.yamini.01@gmail.com",
      age: 40,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 5,
      name: "Kenneth Parcell",
      email: "me.yamini.01@gmail.com",
      age: Infinity,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 6,
      name: "Pete Hornberger",
      email: "me.yamini.01@gmail.com",
      age: 42,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    {
      id: 7,
      name: "Frank Rossitano",
      email: "me.yamini.01@gmail.com",
      age: 36,
      years_of_experience: 5,
      position_applied: "Developer",
      date_of_application: "08-28-2022",
      status_of_application: "Waiting",
    },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
  ];

  return (
    <div className="App">
      <h2>Recruiting App</h2>
      <TableData rows={rows} columns={columns} />
    </div>
  );
}
