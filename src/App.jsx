
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DSAMainLayout from './components/layout/DSAMainLayout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/mtodashboard" component={MTOMainLayout} />
          <Route path="/bankadmindashboard" component={BankAdminMainLayout} />
          <Route path="/bankbranchdashboard" component={BankBranchMainLayout} />
          <Route path="/dsadashboard" component={DSAMainLayout} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



