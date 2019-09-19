import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamList from "./components/TeamList";

function App() {
  return <TeamList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
