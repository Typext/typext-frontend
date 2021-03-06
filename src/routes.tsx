import React from 'react';
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Route from 'components/molecules/Route';

import Recovery from 'pages/Recovery';
import UserUpdate from 'pages/UserUpdate';
import ResetPassword from 'pages/ResetPassword';
import Register from 'pages/Register';
import Home from 'pages/Home';
import Minute from 'pages/Minute';
import MinutesList from 'pages/MinutesList';
import Login from 'pages/Login';
import Invite from 'pages/Invite';
import NotFound from 'pages/NotFound';
import Users from 'pages/Users';
import Review from 'pages/Review';
import LandingPage from 'pages/LandingPage';
import SignMinute from 'pages/SignMinute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/user/update" isPrivate component={UserUpdate} />
        <Route path="/home" exact isPrivate component={Home} />
        <Route path="/minute" isPrivate component={Minute} />
        <Route path="/reset/:email" component={ResetPassword} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/login" component={Login} />
        <Route path="/invite/:email" component={Register} />
        <Route path="/404" component={NotFound} />
        <Route path="/minutes" isPrivate component={MinutesList} />
        <Route
          path="/sign-minute/:minute_id/:user_email"
          component={SignMinute}
        />

        <Route path="/invite" exact isPrivate onlyAdmin component={Invite} />
        <Route path="/users" isPrivate onlyAdmin component={Users} />
        <Route path="/review/:id" isPrivate component={Review} />

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}
