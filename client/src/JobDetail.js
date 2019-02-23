import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { jobs } from "./fake-data";
import Title from "./common/Title";

const SubTitle = styled.h2`
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const DescriptionWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(10, 10, 10, 0.1);
  padding: 1.25rem;
`;

const Description = styled.p`
  color: #4a4a4a;
  display: block;
`;

export class JobDetail extends Component {
  constructor(props) {
    super(props);
    const { jobId } = this.props.match.params;
    this.state = { job: jobs.find(job => job.id === jobId) };
  }

  render() {
    const { job } = this.state;
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
  }
}
