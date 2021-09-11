// Imports.
import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  constructor() {
    super();

    // set our default state
    this.state = {
      question: "",
      answer: "",
      answered: false,
    };

    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this componenent) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }
  // our method to handle all click events from our buttons
  handleClick(event) {
    // get the value from the target element (button)
    var checkValue = event.target.value;
    const value = checkValue;
    console.log(value);

    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the question ,convert the answer
        // (in number) to String
        if (this.state.question !== "") {
          var ans = "";
          try {
            var currQuestion = this.state.question;
            currQuestion = this.state.question.replace("x", "*");
            currQuestion = currQuestion.replace("÷", "/");
            console.log("current question " + currQuestion);
            ans = Function('"use strict";return (' + currQuestion + ")")();
            // ans = eval(currQuestion);

            console.log("Here: " + ans);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) {
            this.setState({ answer: "Math Error" });
          }
          // update answer in our state.
          else this.setState({ answer: ans, answered: true });
          break;
        }
      }
      case "Clear": {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        this.setState({ question: "", answer: "", answered: false });
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
        console.log(this.state.answered);
        var currAns = this.state.answer;

        if (this.state.answered) {
          console.log("Here " + this.state.answer);
          this.setState({ answered: false });
          this.setState({ question: (currAns += value) });
        } else {
          this.setState({ question: (this.state.question += value) });
        }

        break;
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Visual Calculator" />
        <div className="mainCalc">
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
            answered={this.state.answered}
          />
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"Clear"} />
            <Button handleClick={this.handleClick} label={"Delete"} />
            <Button handleClick={this.handleClick} label={"."} />
            <Button handleClick={this.handleClick} label={"÷"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"7"} />
            <Button handleClick={this.handleClick} label={"8"} />
            <Button handleClick={this.handleClick} label={"9"} />
            <Button handleClick={this.handleClick} label={"x"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"4"} />
            <Button handleClick={this.handleClick} label={"5"} />
            <Button handleClick={this.handleClick} label={"6"} />
            <Button handleClick={this.handleClick} label={"-"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"1"} />
            <Button handleClick={this.handleClick} label={"2"} />
            <Button handleClick={this.handleClick} label={"3"} />
            <Button handleClick={this.handleClick} label={"+"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"0"} />
            <Button handleClick={this.handleClick} label={"="} />
            <Button handleClick={this.handleClick} label={"("} />
            <Button handleClick={this.handleClick} label={")"} />
          </div>
        </div>
      </div>
    );
  }
}

// Export Calculator Component.
export default Calculator;
