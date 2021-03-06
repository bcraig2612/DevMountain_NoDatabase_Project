import React, { Component } from "react";
import ToDo from "./ToDo";
import "./styles/ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { updateList, updateDeleteList } = this.props;
    let id = 0;
    const listItems = this.props.toDos.map((e, i) => {
      id++;
      return (
        <ToDo
          nameValue={e}
          id={id}
          index={i}
          key={i}
          updateList={updateList}
          updateDeleteList={updateDeleteList}
        />
      );
    });
    return <div id="TheTasks">{listItems}</div>;
  }
}

export default ToDoList;
