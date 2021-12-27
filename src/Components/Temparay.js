import React, { Component } from "react";
import "./Background.css";


import News from "./News";

class Temporary extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      items: [],
    };
  }

  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  showValue = (e) => {
    e.preventDefault();
    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    const tempArr = this.state.items;
    tempArr.push(tempObj);
    this.setState({
      name: "",
      department: "",
      rating: "",
      items: [...tempArr],
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <div className="form">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            className="firstbox"
            onChange={this.getValue}
            value={this.state.name}
          />
          <br />
          <label htmlFor="">Department : </label>
          <input
            type="text"
            className="firstbox2"
            name="department"
            onChange={this.getValue}
            value={this.state.department}
          />
          <br />
          <label htmlFor="">Rating : </label>
          <input
            className="firstbox3"
            type="number"
            name="rating"
            onChange={this.getValue}
            value={this.state.rating}
          />
          <br />
          <button name="submit" onClick={this.showValue}>
            Submit
          </button>
        </div>

        <div className="div1">
          {this.state.items.map((value, index) => {
            return (
              <News
                name={value.name}
                department={value.department}
                rating={value.rating}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Temporary;
