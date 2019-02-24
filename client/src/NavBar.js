import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import styles from "./styles";

const Nav = styled.nav`
  background-color: white;
  max-width: 750px;
  padding-top: 1em;
  position: relative;
`;

const NavWrapper = styled.ul`
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
`;

const LinkWrapper = styled.li`
  margin: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  text-transform: uppercase;

  &:after {
    background: ${styles.colors.blue};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transition: 0.3s;
    width: 0;
  }

  &:hover {
    cursor: pointer;

    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

const NavItem = css`
  color: ${styles.colors.black} !important;
  display: block;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.325s ease-out;

  &:hover {
    color: ${styles.colors.blue} !important;
    transition: color 0.325s ease-out;
  }
`;

const Button = styled.button`
  ${NavItem}
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  ${NavItem}
`;

export class NavBar extends Component {
  render() {
    const { loggedIn, onLogout } = this.props;

    return (
      <Nav>
        <NavWrapper>
          <LinkWrapper>
            <NavLink to="/">Home</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            {loggedIn && <NavLink to="/jobs/new">Post Job</NavLink>}
          </LinkWrapper>
          <LinkWrapper>
            {!loggedIn ? (
              <NavLink to="/login">Login</NavLink>
            ) : (
              <Button onClick={onLogout}>Logout</Button>
            )}
          </LinkWrapper>
        </NavWrapper>
      </Nav>
    );
  }
}
