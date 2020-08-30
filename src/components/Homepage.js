import React, { Component } from "react";
import axios from "axios";

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleAddTask() {
    if (this.input.value !== "") {
      this.props.addTask(this.input.task);
      this.setState({
        task: "",
      });
      this.input.placeholder = "Add Task Here";
    }
  }
  componentDidMount() {
    axios.get("/api/task", { tasks: this.state.task }).then((res) => {
      this.setState({
        task: res.data,
      });
    });
  }

  addTask = () => {
    axios
      .post("/api/task", { tasks: this.state.task })
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="homepage">
        <input
          placeholder="enter task"
          onChange={(e) => this.handleOnChange(e)}
        />
        <button onClick={this.addTask} className="add-btn">
          Add
        </button>
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
        {this.state.tasks}
        {this.state.tasks}
      </div>
    );
  }
}

export default Homepage;
