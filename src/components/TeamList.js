import React from "react";
import MemberCard from "./MemberCard";

//props from index.js
function TeamList(props) {
  return (
    <div className="TeamList">
      {props.team.map(teammate => (
        <MemberCard
          key={teammate.name}
          name={teammate.name}
          email={teammate.email}
          role={teammate.role}
        />
      ))}
    </div>
  );
}

export default TeamList;
