import React, { Component } from "react";
import "./styles/CompletedToDos.css";

class CompletedToDos extends Component {
  render() {
    let { CompletedToDos } = this.props;
    return <div className="Counter"> Tasks Completed: {CompletedToDos} </div>
  }
}
export default CompletedToDos;
