// Imports.
import React from "react";

const Equal = (e) => {
  e.preventDefault();

  const equation = document.querySelector("#equation").value;
  var array = equation.split("");
  var arrayLength = array.length;
  var value = array[array.length - 1];

  console.log(value);

  switch (value) {
    case "+": {
      console.log("not yet");
      break;
    }

    case "-": {
      console.log("not yet");
      break;
    }

    case "*": {
      console.log("not yet");
      break;
    }

    case "x": {
      console.log("not yet");
      break;
    }

    case "/": {
      console.log("not yet");
      break;
    }

    case "=": {
      // if it's an equal sign, use the eval module
      // to evaluate the question ,convert the answer
      // (in number) to String
      if (document.getElementById("equation").value !== "") {
        var ans = "";
        try {
          console.log(document.getElementById("equation").value);
          ans = eval(
            document.getElementById("equation").value.replace("=", "")
          );
          console.log(ans);
          document.querySelector("#finalAnswer");
        } catch (err) {
          alert("Maths error");
        }
        if (ans === undefined) alert("Maths error");
        // update answer in our state.
        else {
          document.getElementById("finalAnswer").value = ans;
          break;
        }
      }
    }

    default: {
      // for every other command, update the answer in the state
      //document.querySelector("#finalAnswer").value = array[0];
      if (document.getElementById("equation").value !== "") {
        var ans = "";
        try {
          ans = eval(
            document.getElementById("equation").value.replace("=", "")
          );
          console.log(ans);
        } catch (err) {
          alert("Maths error");
        }
        if (ans === undefined) alert("Maths error");
        // update answer in our state.
        else {
          document.getElementById("finalAnswer").value = ans;
          break;
        }
      }

      break;
    }
  }
};
class EquationsCalculator extends React.Component {
  // our method to handle all click events from our buttons

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

// Export Calculator Component.
export default EquationsCalculator;
