import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
    background: #209ceed1;
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
  color: #4a4a4a;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
`;

const Button = styled.button`
  ${NavItem}
  border: none;
  cursor: pointer;
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  ${NavItem}
  &:hover {
    color: #4a4a4a !important;
  }
`;

export class NavBar extends Component {
  render() {
    const { loggedIn, onLogout } = this.props;
    if (loggedIn) {
      return (
        <Nav>
          <NavWrapper>
            <LinkWrapper>
              <NavLink to="/">Home</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to="/jobs/new">Post Job</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <Button onClick={onLogout}>Logout</Button>
            </LinkWrapper>
          </NavWrapper>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavWrapper>
            <LinkWrapper>
              <NavLink to="/">Home</NavLink>
            </LinkWrapper>
            <LinkWrapper>
              <NavLink to="/login">Login</NavLink>
            </LinkWrapper>
          </NavWrapper>
        </Nav>
      );
    }
  }
}
