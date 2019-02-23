import React from "react";
import styled from "styled-components";
import styles from "../../styles";

const Title = styled.h1`
  color: ${styles.colors.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
  padding-bottom: 0.5em;
`;

export default ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};
