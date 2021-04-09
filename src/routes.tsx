import React from 'react';
import RecoveryPassword from 'pages/RecoveryPassword';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { getMode } from 'services/api';

import Route from 'components/Route';

import LandingPage from 'pages/LandingPage';
import NewPassword from 'pages/NewPassword';
import RegisterNewUser from 'pages/RegisterNewUser';
import Home from 'pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import Invite from './pages/Invite';
import NotFound from './pages/NotFound';

export default function Routes() {
  const isNotProduction = getMode();

  return (
    <BrowserRouter>
      <Switch>
        {isNotProduction && <Route path="/" exact component={LandingPage} />}
        <Route path="/home" exact isPrivate component={Home} />
        <Route path="/minute" isPrivate component={Main} />
        <Route path="/invite" exact isPrivate component={Invite} />
        <Route path="/reset" component={NewPassword} />
        <Route path="/recovery" component={RecoveryPassword} />
        <Route path="/login" component={Login} />
        <Route path="/invite/:token" component={RegisterNewUser} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
