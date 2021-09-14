// Imports.
import React, { useState, useEffect } from "react";

function BasicFormCalculator() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#result").value = 0;
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  function addEffect(e, value) {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#newNum").value;
    if (currentNum == "") {
      return;
    }

    let sum = currentSum + parseFloat(currentNum);
    sum = Function(
      '"use strict";return (' +
        currentSum +
        value +
        parseFloat(currentNum) +
        ")"
    )();
    setCurrentSum(sum);
    document.querySelector("#newNum").value = "";
  }

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum: ", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };

  return (
    <div>
      <div className="calculator-title">Basic Form Calculator</div>
      <p>
        Enter a number in the box below and press any of the buttons to apply
        that value to the current values in the results box.
      </p>
      <form>
        <label>Enter a number </label> <br />
        <input type="text" id="newNum" /> <br />
        <button className="btn btn-success" onClick={(e) => addEffect(e, "+")}>
          Add
        </button>
        <button className="btn btn-success" onClick={(e) => addEffect(e, "-")}>
          Subtract
        </button>
        <button className="btn btn-success" onClick={(e) => addEffect(e, "*")}>
          Multiply
        </button>
        <button className="btn btn-success" onClick={(e) => addEffect(e, "/")}>
          Divide
        </button>
        <button className="btn btn-outline-success" onClick={Clear}>
          Clear
        </button>
        <br />
        <label>Results </label> <br />
        <input type="text" id="result" value={currentSum} readOnly />
        <br />
      </form>
    </div>
  );
}

// Export Calculator Component.
export default BasicFormCalculator;
