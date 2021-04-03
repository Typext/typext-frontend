import React from 'react';
import RecoveryPassword from 'pages/RecoveryPassword';
import { Switch, BrowserRouter } from 'react-router-dom';

import { getMode } from 'services/api';

import Route from 'components/Route';

import LandingPage from 'pages/LandingPage';
import NewPassword from 'pages/NewPassword';
import RegisterNewUser from 'pages/RegisterNewUser';
import Home from 'pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import InviteUsers from './pages/InviteUsers';

export default function Routes() {
  const isNotProduction = getMode();

  return (
    <BrowserRouter>
      <Switch>
        {isNotProduction && <Route path="/" exact component={LandingPage} />}
        <Route path="/home" exact isPrivate component={Home} />
        <Route path="/minute" isPrivate component={Main} />
        <Route path="/reset" component={NewPassword} />
        <Route path="/recovery" component={RecoveryPassword} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterNewUser} />
        <Route path="/invite" component={InviteUsers} />
      </Switch>
    </BrowserRouter>
  );
}
