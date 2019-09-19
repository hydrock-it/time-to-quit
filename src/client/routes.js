import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  App,
  Dashboard,
  NotFound,
  Register,
  Login,
  FillInfo,
} from './containers';

export default (store) => {
  const isLogged = (comp, alt) => {
    if (!store) return comp;
    const { auth: { isAuthenticated } } = store.getState();
    return isAuthenticated ? (comp) : (alt);
  };

  return (
    <Switch>
      <Route exact path="/" component={() => isLogged(<Dashboard />, <App />)} />
      <Route path="/dashboard" component={() => isLogged(<Dashboard />, <App />)} />
      <Route path="/fillinfo" component={() => isLogged(<FillInfo />, <Login />)} />
      <Route path="/signup" component={() => isLogged(<Redirect to="/" />, <Register />)} />
      <Route path="/login" component={() => isLogged(<Redirect to="/" />, <Login />)} />
      <Route component={NotFound} />
    </Switch>
  );
};
