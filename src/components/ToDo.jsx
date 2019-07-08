import React, { Component } from "react";
import axios from "axios";
class ToDo extends Component {
  constructor(props) {
    super(props);
    let displayName = this.props.nameValue;
    this.state = {
      editToggle: false,
      updatedText: this.props.nameValue,
      savedUpdatedText: "",
      displayText: displayName,
      deleteIndex: this.props.index
    };
  }

  savedUpdatedText(e) {
    this.setState({ updatedText: e });
  }

  saveText(props) {
    let saveText = this.state.updatedText;
    this.setState({ savedUpdatedText: saveText });
    axios.put("/api/update", { toDos: saveText, index: this.props.index })
      .then(res => {
        this.props.updateList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      editToggle: !this.state.editToggle,
      displayText: saveText
    });
  }

  deleteToDo(props) {
    axios.delete("/api/delete", {
      data: {
        toDos: this.state.savedUpdatedText,
        index: this.props.index,
        id: this.props.id
      }
    })
      .then(res => {
        this.props.updateDeleteList(res.data);
      });
  }

  toggle() {
    this.setState({ editToggle: !this.state.editToggle });
  }

  enter = e => {
    if (e.key === "Enter") {
      return this.saveText();
    }
  };

  onChange = e => {
    this.setState({ updatedText: e.target.value });
  };

  returnedItem() {
    if (this.state.editToggle === false) {
      return (
        <div>
          <input type="checkbox" onClick={() => this.deleteToDo()} />
          {this.props.nameValue}
          <button className="btn btn-outline-info btn-sm" onClick={() => this.toggle()} >Edit</button>
        </div>
      );
    } else if (this.state.editToggle === true) {
      return (
        <div>
          <input type="text" value={this.state.updatedText} onChange={this.onChange} />
          <button type="button" className="btn btn-outline-success btn-large" onClick={() => this.saveText()}>Update</button>
          <button type="button" className="btn btn-outline-danger btn-large" onClick={() => this.deleteToDo()}>Remove</button>
        </div>
      );
    }
  }
  render() {
    return <div> {this.returnedItem()} </div>;
  }
}

export default ToDo;
