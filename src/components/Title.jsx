import React from "react";

const Title = props => {
  return (
    <header id="title-root">
      <h2>To-Do List</h2>
      {props.completedToDos}
    </header>
  );
};

export default Title;
