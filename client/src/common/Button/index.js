import React from "react";
import styled from "styled-components";
import styles from "../../styles";

const Button = styled.button`
  align-items: center;
  background-color: ${props => (props.submit ? "#3273dc" : "white")};
  color: ${styles.colors.black};
  border: 1px solid
    ${props => (props.submit ? "transparent" : "rgba(10, 10, 10, 0.25)")};
  border-radius: 3px;
  box-shadow: none;
  color: ${props => (props.submit ? "#fff" : "#363636")};
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  padding: 0.5em;
  position: relative;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap;
`;

export default ({ dataTestId, children, ...props }) => {
  return (
    <Button type="button" data-test-id={dataTestId} {...props}>
      {children}
    </Button>
  );
};
