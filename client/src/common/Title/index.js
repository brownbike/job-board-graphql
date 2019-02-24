import React from "react";
import styled from "styled-components";
import styles from "../../styles";

const Title = styled.h1`
  color: ${styles.colors.black};
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 0.25em;
`;

export default ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
