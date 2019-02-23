import React, { Component } from "react";
import styled from "styled-components";
import { login } from "./auth";
import Button from "./common/Button";
import Label from "./common/Label";

const Form = styled.form`
  margin: 0 auto;
  max-width: 750px;
`;

const FieldWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Input = styled.input`
  background-color: white;
  border-color: #dbdbdb;
  border: 1px solid rgba(10, 10, 10, 0.25);
  border-radius: 3px;
  box-shadow: none;
  color: #363636;
  font-size: 1rem;
  height: 2.25em;
  line-height: 1.5;
  padding: 0.5em;
  width: 100%;
`;

const Message = styled.p`
  color: ${props => (props.error ? "red" : "inherit")};
  display: block;
  font-size: 0.75rem;
  margin: 0.25em 0 0.75em;
`;

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
      <Form>
        <FieldWrapper>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={e => this.handleChange(e)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => this.handleChange(e)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Message error>{error && "Invalid credentials"}</Message>
          <Button submit onClick={e => this.handleClick(e)}>
            Login
          </Button>
        </FieldWrapper>
      </Form>
    );
  }
}
