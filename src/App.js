import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Title from "./components/Title";
import ToDoList from "./components/ToDoList";
import CompletedToDos from "./components/CompletedToDos";
import AddText from "./components/AddText";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      CompletedToDos: 0
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
      CompletedToDos: this.state.CompletedToDos + 1
    });
    console.log(this.state.CompletedToDos, "BOOM");
  }

  render() {
    let { toDos } = this.state;
    return (
      <div className="App">
        <Title />
        <AddText createToDo={this.createToDo} />
        <ToDoList
          toDos={toDos}
          updateList={this.updateList}
          updateDeleteList={this.updateDeleteList}
        />
        <CompletedToDos 
          CompletedToDos={this.state.CompletedToDos} />
      </div>
    );
  }
}

export default App;
