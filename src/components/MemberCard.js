import React from "react";

//props from TeamList.js
function TeammateCard(props) {
  return (
    <div className="TeammateCard">
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <h3>{props.role}</h3>
    </div>
  );
}

export default TeammateCard;
