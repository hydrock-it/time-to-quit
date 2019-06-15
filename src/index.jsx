import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './app/components/main-component'

import { Provider } from 'react-redux';
import store from 'src/store';

import './styles';

const App = () => {
  return (
    <Provider store={ store }>
      <MainContainer />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
