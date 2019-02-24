import React, { Component } from "react";
import styled from "styled-components";
import { loadCompany } from "./utils/requests";
import styles from "./styles";
import { JobList } from "./JobList";
import Title from "./common/Title";

const DescriptionWrapper = styled.div`
  border-radius: 5px;
  padding: 0.5rem 0;
  margin-bottom: 0.75em;
`;

const Description = styled.p`
  color: ${styles.colors.black};
  display: block;
  margin-bottom: 1em;
`;

const JobMessage = styled.h5`
  color: ${styles.colors.gray};
  display: block;
`;

export class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
  }

  async componentDidMount() {
    const { companyId } = this.props.match.params;
    const company = await loadCompany(companyId);
    this.setState({ company });
  }

  render() {
    const { company } = this.state;
    if (!company) {
      return null;
    }

    return (
      <div>
        <Title>{company.name}</Title>
        <DescriptionWrapper>
          <Description>{company.description}</Description>
          <JobMessage>Jobs at {company.name}</JobMessage>
        </DescriptionWrapper>
        <JobList jobs={company.jobs} />
      </div>
    );
  }
}
