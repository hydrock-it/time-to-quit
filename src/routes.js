import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  App,
  Home,
  NotFound,
  SignUp,
} from './containers';

export default (store) => {
  const isLogged = (comp, alt) => {
    if (!store) return comp;
    const { auth: { loggingIn } } = store.getState();
    return loggingIn ? (comp) : (alt);
  };

  return (
    <Switch>
      <Route exact path="/" component={() => isLogged(<Home />, <App />)} />
      <Route path="/signup" component={() => isLogged(<Redirect to="/" />, <SignUp />)} />
      <Route component={NotFound} />
    </Switch>
  );
};
