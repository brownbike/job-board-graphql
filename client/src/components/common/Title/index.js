import React from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

const Title = styled.h1`
  color: ${styles.colors.black};
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 0.25em;
`;

export default ({ dataTestId, children, ...props }) => {
  return (
    <Title data-test-id={dataTestId} {...props}>
      {children}
    </Title>
  );
};
