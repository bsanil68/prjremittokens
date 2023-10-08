// Content.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/dashboard/home" component={Home} />
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default Content;
