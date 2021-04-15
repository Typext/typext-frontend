import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { getMode } from 'services/api';

import Route from 'components/Route';

import Recovery from 'pages/Recovery';
import LandingPage from 'pages/LandingPage';
import ResetPassword from 'pages/ResetPassword';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Minute from 'pages/Minute';
import Login from 'pages/Login';
import Invite from 'pages/Invite';
import NotFound from 'pages/NotFound';

export default function Routes() {
  const isNotProduction = getMode();

  return (
    <BrowserRouter>
      <Switch>
        {isNotProduction && <Route path="/" exact component={LandingPage} />}
        <Route path="/home" exact isPrivate component={Home} />
        <Route path="/minute" isPrivate component={Minute} />
        <Route path="/invite" exact isPrivate component={Invite} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/login" component={Login} />
        <Route path="/invite/:token" component={Register} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
