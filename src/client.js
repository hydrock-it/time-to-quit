import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { create } from './client/redux';
import getRoutes from './client/routes';

import setAuthToken from './client/utils/setAuthToken';
import { setAuthenticatedAC, logoutUserAC } from './client/redux/actions/authActions';

import './client/styles';

const dest = document.getElementById('root');
const store = create();

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode(token);
  store.dispatch(setAuthenticatedAC(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUserAC());
    window.location.href = './login';
  }
}

const component = (
  <Router>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest,
);
