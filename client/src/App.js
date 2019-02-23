import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { isLoggedIn, logout } from "./auth";
import { CompanyDetail } from "./CompanyDetail";
import { LoginForm } from "./LoginForm";
import { JobBoard } from "./JobBoard";
import { JobDetail } from "./JobDetail";
import { JobForm } from "./JobForm";
import { NavBar } from "./NavBar";

const Outer = styled.section`
  padding: 1.5rem;
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

  handleLogin() {
    this.setState({ loggedIn: true });
    this.router.history.push("/");
  }

  handleLogout() {
    logout();
    this.setState({ loggedIn: false });
    this.router.history.push("/");
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Router ref={router => (this.router = router)}>
        <Container>
          <NavBar loggedIn={loggedIn} onLogout={this.handleLogout.bind(this)} />
          <Outer>
            <Switch>
              <Route exact path="/" component={JobBoard} />
              <Route path="/companies/:companyId" component={CompanyDetail} />
              <Route exact path="/jobs/new" component={JobForm} />
              <Route path="/jobs/:jobId" component={JobDetail} />
              <Route
                exact
                path="/login"
                render={() => (
                  <LoginForm onLogin={this.handleLogin.bind(this)} />
                )}
              />
            </Switch>
          </Outer>
        </Container>
      </Router>
    );
  }
}
