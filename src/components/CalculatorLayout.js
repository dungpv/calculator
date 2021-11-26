import React, { Component } from "react";

export default class CalculatorLayout extends Component {
  state = {
    outputResult: "",
  };

  handleClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "=": {
        if (this.state.outputResult !== "") {
          var output = "";
          try {
            output = eval(this.state.outputResult);
          } catch (err) {
            this.setState({ outputResult: "Math Error" });
          }
          if (output === undefined)
            this.setState({ outputResult: "Math Error" });
          else this.setState({ outputResult: output });
          break;
        }
      }
      case "Clear": {
        this.setState({ outputResult: "" });
        break;
      }
      case "Delete": {
        var str = this.state.outputResult;
        if (str.length > 0) {
          str = str.substr(0, str.length - 1);
          this.setState({ outputResult: str });
        }
        break;
      }

      default: {
        // for every other command, update the answer in the state
        this.setState({ outputResult: (this.state.outputResult += value) });
        break;
      }
    }
  };

  render() {
    return (
      <div className="frame">
        <div className="calculator-title">Calculator App React</div>
        <div className="mainCalc">
          <div className="screen">
            <div className="screen-row">
              <input
                id="outputResult"
                type="text"
                value={this.state.outputResult}
                readOnly
              />
            </div>
          </div>
          <div className="button-row">
            <input type="button" value={"Clear"} onClick={this.handleClick} />
            <input type="button" value={"Delete"} onClick={this.handleClick} />
            <input type="button" value={"."} onClick={this.handleClick} />
            <input type="button" value={"/"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <input type="button" value={"7"} onClick={this.handleClick} />
            <input type="button" value={"8"} onClick={this.handleClick} />
            <input type="button" value={"9"} onClick={this.handleClick} />
            <input type="button" value={"*"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <input type="button" value={"4"} onClick={this.handleClick} />
            <input type="button" value={"5"} onClick={this.handleClick} />
            <input type="button" value={"6"} onClick={this.handleClick} />
            <input type="button" value={"-"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <input type="button" value={"1"} onClick={this.handleClick} />
            <input type="button" value={"2"} onClick={this.handleClick} />
            <input type="button" value={"3"} onClick={this.handleClick} />
            <input type="button" value={"+"} onClick={this.handleClick} />
          </div>
          <div className="button-row">
            <input type="button" value={"0"} onClick={this.handleClick} />
            <input type="button" value={"="} onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
