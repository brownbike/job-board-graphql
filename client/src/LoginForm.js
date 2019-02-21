import React, { Component } from "react";
import { login } from "./auth";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: false };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state;
    login(email, password).then(ok => {
      if (ok) {
        this.props.onLogin();
      } else {
        this.setState({ error: true });
      }
    });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <form>
        <div>
          <label>Email</label>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div>
          <label className="label">Password</label>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div>
          <p>{error && "Invalid credentials"}</p>
          <div>
            <button onClick={this.handleClick.bind(this)}>Login</button>
          </div>
        </div>
      </form>
    );
  }
}
