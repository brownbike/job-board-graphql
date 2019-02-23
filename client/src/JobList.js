import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JobListWrapper = styled.ul`
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
`;

const JobWrapper = styled.li`
  padding: 1.25rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  }
`;

export class JobList extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <JobListWrapper>{jobs.map(this.renderJob.bind(this))}</JobListWrapper>
    );
  }

  renderJob(job) {
    const title = job.company
      ? `${job.title} at ${job.company.name}`
      : job.title;
    return (
      <JobWrapper key={job.id}>
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </JobWrapper>
    );
  }
}
