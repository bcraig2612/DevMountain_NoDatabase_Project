import React, { Component } from "react";
import "./styles/CompletedToDos.css";

class CompletedToDos extends Component {
  render() {
    return <div className="Counter"> Tasks Completed: {this.props.CompletedToDos} </div>
  }
}
export default CompletedToDos;
