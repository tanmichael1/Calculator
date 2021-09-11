import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import Calculator from "./components/calculator";

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector("#result").value = 0;
  }, []);

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
  });

  const Add = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }
    let sum = currentSum + parseFloat(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Subtract = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }

    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }

    let sum = currentSum - parseFloat(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Multiply = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }

    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }

    let sum = currentSum * parseFloat(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Divide = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }

    let currentNum = document.querySelector("#num").value;
    if (currentNum == "") {
      return;
    }

    let sum = currentSum / parseFloat(currentNum);
    setCurrentSum(sum);
    document.querySelector("#num").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum: ", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };

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
      case "Clear": {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        // for every other command, update the answer in the state
        document.querySelector("#finalAnswer").value = array[0];

        break;
      }
    }
  };

  return (
    <div className="App">
      {" "}
      <div className="app-title">
        <h1> Basic Form Calculator</h1>
      </div>
      <form>
        <label>Enter a number </label> <br />
        <input type="text" id="num" placeholder="enter a number" />
        <br />
        <br />
        <button className="btn btn-success" onClick={Add}>
          Add
        </button>
        <button className="btn btn-success" onClick={Subtract}>
          Subtract
        </button>
        <button className="btn btn-success" onClick={Multiply}>
          Multiply
        </button>
        <button className="btn btn-success" onClick={Divide}>
          Divide
        </button>
        <button className="btn btn-light" onClick={Clear}>
          Clear
        </button>
        <br />
        <br />
        <label>Results </label> <br />
        <input type="text" id="result" value={currentSum} readOnly />
        <br />
      </form>
      <br />
      <hr />
      <Calculator />
      <br /> <hr />
      <h1>Equations Calculator </h1>
      <form>
        <input type="text" id="num2" placeholder="enter an equation" />
        <br />
        <button onClick={Add2}>Equal</button> <br />
        <input type="text" id="finalAnswer" readOnly />
      </form>
    </div>
  );
}

export default App;
