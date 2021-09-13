import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import VisualCalculator from "./components/visualCalculator/VisualCalculator";
import EquationsCalculator from "./components/equationsCalculator/EquationsCalculator";
import BasicFormCalculator from "./components/basicFormCalculator/BasicFormCalculator";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {" "}
      <Header />
      <br />
      <BasicFormCalculator />
      <br />
      <hr />
      <VisualCalculator />
      <br /> <hr />
      <EquationsCalculator />
      <br />
      <Footer />
    </div>
  );
}

export default App;
