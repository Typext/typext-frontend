import RecoveryPassword from 'pages/RecoveryPassword';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import NewPassword from 'pages/NewPassword';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/recovery-password" exact component={RecoveryPassword} />
        <Route path="/new-password" exact component={NewPassword} />
      </Switch>
    </BrowserRouter>
  );
}
