import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../styles/styles";

const JobListWrapper = styled.ul`
  border-radius: 5px;
  display: block;
`;

const JobWrapper = styled.li`
  background-color: ${styles.colors.lightGray};
  border: ${styles.border.withColor(styles.colors.lighterGray)};
  padding: 1.25rem;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export class JobList extends Component {
  render() {
    const { jobs } = this.props;
    return <JobListWrapper>{jobs.map(this.renderJob)}</JobListWrapper>;
  }

  renderJob = job => {
    const title = job.company
      ? `${job.title} at ${job.company.name}`
      : job.title;
    return (
      <JobWrapper key={job.id}>
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </JobWrapper>
    );
  };
}
