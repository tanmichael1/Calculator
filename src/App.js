import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import VisualCalculator from "./components/visualCalculator/VisualCalculator";
import EquationsCalculator from "./components/equationsCalculator/EquationsCalculator";
import BasicFormCalculator from "./components/basicFormCalculator/BasicFormCalculator";

function App() {
  return (
    <div className="App">
      {" "}
      <BasicFormCalculator />
      <br />
      <hr />
      <VisualCalculator />
      <br /> <hr />
      <EquationsCalculator />
    </div>
  );
}

export default App;
