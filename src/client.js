import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { create } from './redux';
import getRoutes from './routes';

import './styles';

const dest = document.getElementById('root');
const store = create();

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
