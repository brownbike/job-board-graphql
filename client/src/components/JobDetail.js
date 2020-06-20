import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadJob } from '../utils/requests';
import styled from 'styled-components';
import Title from './common/Title';
import styles from '../styles/styles';

const SubTitle = styled.h2`
  color: ${styles.colors.gray};
  font-size: 1.25rem;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const DescriptionWrapper = styled.div`
  background-color: ${styles.colors.lightGray};
  border-radius: 5px;
  padding: 1.25rem;
`;

const Description = styled.p`
  color: ${styles.colors.black};
  display: block;
`;

export const JobDetail = ({
  match: {
    params: { jobId },
  },
}) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      const job = await loadJob(jobId);
      setJob(job);
    }

    fetchJob();
  }, [jobId]);

  if (!job) {
    return null;
  }

  return (
    <>
      <Title>{job.title}</Title>
      <SubTitle>
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </SubTitle>
      <DescriptionWrapper>
        <Description>{job.description}</Description>
      </DescriptionWrapper>
    </>
  );
};
