import React, { Component } from "react";

import Items from "./Items";

import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      input: "",
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  };
  handleOnSubmit = (e) => {
    this.setState({ task: e.target.value });
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

  addTask = () => {
    axios
      .post("/api/task", { title: this.state.input })
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editTask = (title, task) => {
    axios
      .put(`/api/task/${task}`, { title })
      .then((res) => {
        this.setState({
          task: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTask = (task) => {
    axios.delete(`/api/task/${task}`).then((res) => {
      this.setState({
        task: res.data,
      });
    });
  };

  render(props) {
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
        </form>
        <div className="list-items">
          {this.state.task.map((post) => {
            const { id, title, desc } = post;
            return (
              <Items
                key={id}
                title={title}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                id={id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
