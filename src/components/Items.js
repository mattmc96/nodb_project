import React, { Component } from "react";

export default class Items extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      text: true,
    };
  }
  handleOnClick(e) {
    this.props.editTask(this.state.input, this.props.id);
    this.setState({
      text: true,
    });
  }
  handleonChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  handleToggleText() {
    this.setState({
      text: !this.state.text,
    });
  }
  render(props) {
    return (
      <div className="list-items">
        <div className="data-info">
          <div className="btn-container">
            <button
              onClick={() => this.handleToggleText()}
              className="edit-btn"
            >
              Edit
            </button>

            <div className="btn-box">
              <button
                onClick={() => this.props.deleteTask(this.props.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="btn-box">
            {this.state.text ? (
              <p>{this.props.title}</p>
            ) : (
              <div>
                {" "}
                <input onChange={(e) => this.handleonChange(e)}></input>
                <button
                  className="save-btn"
                  onClick={() => this.handleOnClick()}
                >
                  {" "}
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
