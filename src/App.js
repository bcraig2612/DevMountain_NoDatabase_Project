import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Title from "./components/Title";
import ToDoList from "./components/ToDoList";
import CompleteToDos from "./components/CompleteToDos";
import AddText from "./components/AddText";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      completedToDos: 0
    };

    this.createToDo = this.createToDo.bind(this);
    this.updateList = this.updateList.bind(this);
    this.updateDeleteList = this.updateDeleteList.bind(this);
  }

  componentDidMount() {
    axios.get("/api/toDos").then(res => {
      console.log("got response", res.data);
      this.setState({ toDos: res.data });
    });
  }

  createToDo(toDo) {
    this.setState({ toDos: toDo });
  }

  updateList(list) {
    this.setState({ toDos: list });
  }

  updateDeleteList(list) {
    this.setState({
      toDos: list,
      completedToDos: this.state.completedToDos + 1
    });
    console.log(this.state.completedToDos, "BOOM");
  }

  render() {
    return (
      <div className="App">
        <Title completedToDos={this.state.completedToDos} />
        <AddText createToDo={this.createToDo} />
        <ToDoList
          toDos={this.state.toDos}
          updateList={this.updateList}
          updateDeleteList={this.updateDeleteList}
        />
        <CompleteToDos />
      </div>
    );
  }
}

export default App;
