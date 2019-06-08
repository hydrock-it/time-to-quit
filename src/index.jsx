import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './app/components/main-component'

import './styles';

const App = () => {
  return (
    <MainContainer />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
