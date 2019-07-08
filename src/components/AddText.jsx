import React, { Component } from "react";
import axios from "axios";
import "./styles/AddText.css";

class AddText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      savedInput: ""
    };
  }

  handleText(e) {
    this.setState({ input: e });
  }

  addToDo(e) {
    let value = this.state.input;
    this.setState({ savedInput: value });
    console.log(value);
    axios.post("/api/create", { toDo: value }).then(res => {
      this.props.createToDo(res.data);
    });
    e.target.value = "";
  }

  enter = e => {
    if (e.key === "Enter") {
      return this.addToDo(e);
    }
  };

  render() {
    return (
      <div id="AddIt">
        <input
          className="input-box"
          placeholder="       Add Your Task Here!"
          onKeyPress={this.enter}
          onChange={e => this.handleText(e.target.value)}
        />
      </div>
    );
  }
}

export default AddText;
