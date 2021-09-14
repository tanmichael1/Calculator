// Imports.
import React from "react";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class VisualCalculator extends React.Component {
  constructor() {
    super();

    // set default state
    this.state = {
      question: "",
      answer: "",
      answered: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var checkValue = event.target.value;
    const value = checkValue;
    console.log(value);

    switch (value) {
      case "=": {
        if (this.state.question !== "") {
          var ans = "";
          try {
            var currQuestion = this.state.question;
            currQuestion = this.state.question.replace("x", "*");
            currQuestion = currQuestion.replace("÷", "/");
            console.log("current question " + currQuestion);
            ans = Function('"use strict";return (' + currQuestion + ")")();
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }
          if (ans === undefined) {
            this.setState({ answer: "Math Error" });
          } else this.setState({ answer: ans, answered: true });
          break;
        }
        break;
      }
      case "Clear": {
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
        <div className="calculator-title">Visual Calculator</div>
        <p>
          Press on the calculator buttons to create an equation before pressing
          the equals button.
        </p>
        <div className="mainCalc">
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
            answered={this.state.answered}
          />
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"("} />
            <Button handleClick={this.handleClick} label={")"} />
            <Button handleClick={this.handleClick} label={"Clear"} />
            <Button handleClick={this.handleClick} label={"Delete"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"7"} />
            <Button handleClick={this.handleClick} label={"8"} />
            <Button handleClick={this.handleClick} label={"9"} />
            <Button handleClick={this.handleClick} label={"÷"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"4"} />
            <Button handleClick={this.handleClick} label={"5"} />
            <Button handleClick={this.handleClick} label={"6"} />

            <Button handleClick={this.handleClick} label={"x"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"1"} />
            <Button handleClick={this.handleClick} label={"2"} />
            <Button handleClick={this.handleClick} label={"3"} />
            <Button handleClick={this.handleClick} label={"-"} />
          </div>
          <div className="button-row">
            <Button handleClick={this.handleClick} label={"0"} />
            <Button handleClick={this.handleClick} label={"."} />
            <Button handleClick={this.handleClick} label={"="} />
            <Button handleClick={this.handleClick} label={"+"} />
          </div>
        </div>
      </div>
    );
  }
}

// Export Calculator.
export default VisualCalculator;
