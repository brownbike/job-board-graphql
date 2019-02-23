import React, { Component } from "react";
import styled from "styled-components";

import { JobList } from "./JobList";
const { jobs } = require("./fake-data");

const Title = styled.h1`
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  padding-bottom: 0.5em;
`;

export class JobBoard extends Component {
  render() {
    return (
      <>
        <Title>Job Board</Title>
        <JobList jobs={jobs} />
      </>
    );
  }
}
