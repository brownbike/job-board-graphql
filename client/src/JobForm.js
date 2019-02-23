import React, { Component } from "react";
import { createJob } from "./requests";
import styled, { css } from "styled-components";
import Title from "./common/Title";
import Button from "./common/Button";
import Label from "./common/Label";

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
    const { title, description } = this.state;

    createJob({ title, description }).then(job => {
      this.props.history.push(`/jobs/${job.id}`);
    });
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
                onChange={e => this.handleChange(e)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Label>Description</Label>
              <TextArea
                name="description"
                value={description}
                onChange={e => this.handleChange(e)}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Button submit onClick={e => this.handleClick(e)}>
                Submit
              </Button>
            </FieldWrapper>
          </form>
        </FormWrapper>
      </>
    );
  }
}
