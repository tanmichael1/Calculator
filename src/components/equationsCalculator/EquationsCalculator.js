// Imports.
import React from "react";

const Add2 = (e) => {
  e.preventDefault();

  const equation = document.querySelector("#num2").value;
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
      if (document.getElementById("num2").value !== "") {
        var ans = "";
        try {
          console.log(document.getElementById("num2").value);
          ans = eval(document.getElementById("num2").value.replace("=", ""));
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
      if (document.getElementById("num2").value !== "") {
        var ans = "";
        try {
          ans = eval(document.getElementById("num2").value.replace("=", ""));
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
        <h1>Equations Calculator </h1>
        <p>
          Enter a basic equation (e.g. 1+1) before pressing the Equal button
        </p>
        <form>
          <input type="text" id="num2" placeholder="enter an equation" />
          <br />
          <br />
          <button onClick={Add2}>Equal</button> <br />
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
