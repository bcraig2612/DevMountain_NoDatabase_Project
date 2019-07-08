import React from "react";

const Title = props => {
  return (
    <header id="title-root">
      <h1 className="To-DoList">To-Do List</h1>
      <div className="Counter">
      {props.completedToDos}
      </div>
    </header>
  );
};

export default Title;
