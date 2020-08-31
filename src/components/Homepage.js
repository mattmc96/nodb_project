import React, { Component } from "react";

// import Items from "./Items";

import axios from "axios";

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
    };

    this.addTask = this.addTask.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleAddTask() {
    console.log(this.props);
    if (this.input.value !== "") {
      this.props.addTask(this.input.task);
      this.setState({
        task: "",
      });
      this.input.placeholder = "Add Task Here";
    }
  }
  componentDidMount() {
    axios.get("/api/task").then((res) => {
      console.log(res.data.json);
      this.setState({
        task: res.data,
      });
    });
  }

  addTask = (id, title) => {
    axios
      .post("/api/task", { taskId: id, title })
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // editTask = (id) => {
  //   axios.put(`/api/task/${taskId}`).then((res) => {
  //     this.setState({
  //       task: res.data,
  //     });
  //   });
  // };
  // deleteTask = (taskId) => {
  //   axios.delete(`/api/task/${taskId}`).then((res) => {
  //     this.setState({
  //       task: res.data,
  //     });
  //   });
  // };

  render() {
    return (
      <div className="homepage">
        <form id="to-do-form">
          <input
            type="text"
            placeholder="Enter task"
            onChange={(e) => this.handleOnChange(e)}
          />
          <button type="submit" onClick={this.addTask} className="add-btn">
            Add
          </button>
          <button type="submit" onClick={this.editTask} className="edit-btn">
            Edit
          </button>
          <button
            type="submit"
            onClick={this.deleteTask}
            className="delete-btn"
          >
            Delete
          </button>
        </form>
        {/* <Items /> */}
      </div>
    );
  }
}

export default Homepage;
