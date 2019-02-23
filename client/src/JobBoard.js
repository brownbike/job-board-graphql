import React, { Component } from "react";
import { JobList } from "./JobList";
import Title from "./common/Title";
import { jobs } from "./fake-data";

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
