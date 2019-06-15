import React from 'react';
import Counter from '../counter';

import './style.scss';


const MainContainer = () => {
  return (
    <div className='container'>
      <h3>Mian Container</h3>
      <Counter />
    </div>
  );
}

export default MainContainer;
