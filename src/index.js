import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamList from "./components/TeamList";
import MemberForm from "./components/MemberForm";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Tony",
      email: "probablyHatesOreos@gmail.com",
      role: "Frontend Engineer"
    },
    {
      name: "Ravyen Burns",
      email: "never2ndInLine@gmail.com",
      role: "Frontend Engineer"
    },
    {
      name: "Connor Sullivan",
      email: "alwaysLast@gmail.com",
      role: "Frontend Engineer"
    }
  ]);

  const addNewTeammate = teammate => {
    const newTeammate = {
      name: teammate.name,
      email: teammate.email,
      role: teammate.role
    };
    setTeam([...team, newTeammate]);
  };

  return (
    <div className="App">
      <h1>Web23 Dream Team</h1>
      <MemberForm addNewTeammate={addNewTeammate} />
      <TeamList team={team} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
