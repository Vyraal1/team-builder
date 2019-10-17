import React, { useState } from "react";

const MemberForm = props => {
  const initialState = {
    name: "",
    email: "",
    role: ""
  };

  const [teammateForm, setTeammateForm] = useState(initialState);

  const handleChanges = event => {
    setTeammateForm({
      ...teammateForm,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewTeammate(teammateForm);
    setTeammateForm(initialState);
    console.log(event);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={teammateForm.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={teammateForm.email}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={teammateForm.role}
      />
      <button type="submit">Add Trainee</button>
    </form>
  );
};

export default MemberForm;
