import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CompanyDetail } from './components/CompanyDetail';
import { LoginForm } from './components/LoginForm';
import { JobBoard } from './components/JobBoard';
import { JobDetail } from './components/JobDetail';
import { JobForm } from './components/JobForm';

const Routes = ({ onLogin }) => (
  <Switch>
    <Route exact path="/" component={JobBoard} />
    <Route path="/companies/:companyId" component={CompanyDetail} />
    <Route exact path="/jobs/new" component={JobForm} />
    <Route path="/jobs/:jobId" component={JobDetail} />
    <Route exact path="/login" render={() => <LoginForm onLogin={onLogin} />} />
  </Switch>
);

export default Routes;
