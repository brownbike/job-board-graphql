import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from './styles/globalStyles';

import { isLoggedIn, logout } from "./utils/auth";
import { NavBar } from "./components/NavBar";
import Routes from "./Routes";

const Outer = styled.section`
  padding: 0.25rem 1.5rem 1.5rem;
`;

const Container = styled.section`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 660px;
  }

  @media screen and (min-width: 768px) and (max-width: 1170px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1171px) {
    max-width: 1100px;
  }
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: isLoggedIn() };
  }

  handleLogin = () => {
    this.setState({ loggedIn: true });
    this.router.history.push("/");
  };

  handleLogout = () => {
    logout();
    this.setState({ loggedIn: false });
    this.router.history.push("/");
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <Router ref={router => (this.router = router)}>
        <Container>
          <GlobalStyle />
          <NavBar loggedIn={loggedIn} onLogout={this.handleLogout} />
          <Outer>
            <Routes onLogin={this.handleLogin} />
          </Outer>
        </Container>
      </Router>
    );
  }
}
