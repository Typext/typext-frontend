import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
