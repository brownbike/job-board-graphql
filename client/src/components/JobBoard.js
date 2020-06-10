import React, { Component } from 'react';
import { JobList } from './JobList';
import { loadJobs } from '../utils/requests';
import Title from './common/Title';

export class JobBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  async componentDidMount() {
    const jobs = await loadJobs();
    this.setState({ jobs });
  }

  render() {
    const { jobs } = this.state;

    return (
      <>
        <Title>Job Board</Title>
        <JobList jobs={jobs} />
      </>
    );
  }
}
