import React, { useState, useEffect } from 'react';
import { JobList } from './JobList';
import { loadJobs } from '../utils/requests';
import Title from './common/Title';

export const JobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const jobs = await loadJobs();
      setJobs(jobs);
    }
    loadData();
  }, []);

  return (
    <>
      <Title>Job Board</Title>
      <JobList jobs={jobs} />
    </>
  );
};
