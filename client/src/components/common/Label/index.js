import React from "react";
import styled from "styled-components";
import styles from "../../../styles/styles";

const Label = styled.label`
  color: ${styles.colors.black};
  display: block;
  font-size: 1rem;
  font-weight: 700;

  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default ({ dataTestId, children, ...props }) => {
  return (
    <Label data-test-id={dataTestId} {...props}>
      {children}
    </Label>
  );
};
