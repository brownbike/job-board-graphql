import React, { Component } from "react";
import styled from "styled-components";

import { companies } from "./fake-data";
import Title from "./common/Title";

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

export class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    const { companyId } = this.props.match.params;
    this.state = {
      company: companies.find(company => company.id === companyId)
    };
  }

  render() {
    const { company } = this.state;
    return (
      <div>
        <Title>{company.name}</Title>
        <DescriptionWrapper>
          <Description>{company.description}</Description>
        </DescriptionWrapper>
      </div>
    );
  }
}
