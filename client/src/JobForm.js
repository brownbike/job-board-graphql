import React, { Component } from "react";

import styled, { css } from "styled-components";

const Title = styled.h1`
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  padding-bottom: 0.5em;
`;

const FormWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(10, 10, 10, 0.1);
  padding: 1.25rem;
`;

const FieldWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const fieldStyles = css`
  align-items: center;
  background-color: white;
  border-color: #dbdbdb;
  border: 1px solid rgba(10, 10, 10, 0.25);
  border-radius: 3px;
  box-shadow: none;
  color: #363636;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: 0.5em;
  position: relative;
  max-width: 100%;
  width: 100%;
`;

const Input = styled.input`
  ${fieldStyles}
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  height: 10em;
`;

const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.submit ? "#3273dc" : "white")};
  border-color: #dbdbdb;
  border: 1px solid
    ${props => (props.submit ? "transparent" : "rgba(10, 10, 10, 0.25)")};
  border-radius: 3px;
  box-shadow: none;
  color: ${props => (props.submit ? "#fff" : "#363636")};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  padding: 0.5em;
  position: relative;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap;
`;

export class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "" };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    console.log("should post a new job:", this.state);
  }

  render() {
    const { title, description } = this.state;
    return (
      <>
        <Title>New Job</Title>
        <FormWrapper>
          <form>
            <FieldWrapper>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange.bind(this)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Label>Description</Label>
              <TextArea
                name="description"
                value={description}
                onChange={this.handleChange.bind(this)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Button submit onClick={this.handleClick.bind(this)}>
                Submit
              </Button>
            </FieldWrapper>
          </form>
        </FormWrapper>
      </>
    );
  }
}
