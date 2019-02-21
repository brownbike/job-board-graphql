import React, { Component } from "react";

export class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, description } = this.state;
    return (
      <div>
        <h1>New Job</h1>
        <div>
          <form>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
