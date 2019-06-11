import React from 'react';
import BlockA from '../block-a';
import BlockB from '../block-b';
import BlockC from '../block-c';

import './style.scss';

const MainContainer = () => {
  return (
    <div className='container'>
      <h3>Mian Container</h3>
      <BlockA />
      <BlockB />
      <BlockC />
    </div>
  );
}

export default MainContainer;
