import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { isLoggedIn, logout } from "./auth";
import { CompanyDetail } from "./CompanyDetail";
import { LoginForm } from "./LoginForm";
import { JobBoard } from "./JobBoard";
import { JobDetail } from "./JobDetail";
import { JobForm } from "./JobForm";
import { NavBar } from "./NavBar";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  a:link,
  a:visited,
  a:active {
    color: #4a4a4a;
    text-decoration: none;
    transition: color 0.325s ease-out;

    &:hover {
      color: #209ceed1;
      transition: color 0.325s ease-out;
    }
  }
`;

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
          <GlobalStyle />
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
