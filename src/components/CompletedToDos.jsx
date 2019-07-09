import React from "react";
import "./styles/CompletedToDos.css";

const CompletedToDos = props => {
  console.log("CompletedToDos");
    let { CompletedToDos } = props;
    return <div className="Counter"> Tasks Completed: {CompletedToDos} </div>
  }
export default CompletedToDos;
