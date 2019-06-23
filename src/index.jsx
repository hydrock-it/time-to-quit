import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './app/components/main-component';

import './styles';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
