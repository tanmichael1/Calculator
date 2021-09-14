// Imports.
import React from "react";

const Equal = (e) => {
  e.preventDefault();

  const equation = document.querySelector("#equation").value;
  var array = equation.split("");
  var value = array[array.length - 1];

  switch (value) {
    case "+":
    case "-":
    case "*":
    case "x":
    case "/": {
      console.log("Incorrect");
      break;
    }

    case "=":
    default: {
      if (equation !== "") {
        var ans = "";
        try {
          ans = Function(
            '"use strict";return (' + equation.replace("=", "") + ")"
          )();
        } catch (err) {
          alert(err);
        }
        if (ans === undefined) alert("Answer is undefined");
        else {
          document.getElementById("finalAnswer").value = ans;
          break;
        }
      }
    }
  }
};
class EquationsCalculator extends React.Component {
  render() {
    return (
      <div>
        <div className="calculator-title">Equations Calculator</div>
        <p>
          Enter a basic equation (e.g. 1+1) before pressing the Equal button.
        </p>
        <form>
          <label>Your equation</label>
          <br />
          <input type="text" id="equation" />
          <br />
          <button className="btn btn-success" onClick={Equal}>
            Equal
          </button>{" "}
          <br />
          <label>Results</label>
          <br />
          <input type="text" id="finalAnswer" readOnly />
        </form>
      </div>
    );
  }
}

export default EquationsCalculator;
