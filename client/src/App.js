import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CompanyDetail } from "./CompanyDetail";
import { JobBoard } from "./JobBoard";
import { JobDetail } from "./JobDetail";
import { JobForm } from "./JobForm";

export class App extends Component {
  render() {
    return (
      <Router ref={router => (this.router = router)}>
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={JobBoard} />
              <Route path="/companies/:companyId" component={CompanyDetail} />
              <Route exact path="/jobs/new" component={JobForm} />
              <Route path="/jobs/:jobId" component={JobDetail} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}
