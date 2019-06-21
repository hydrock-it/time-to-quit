import React from 'react';
import Wizard from '../wizard';
import StartStep from './start-step';
import TermDateStep from './term-date-step';
import CommonInfoStep from './common-info-step';
import CigarettesInfoStep from './cigarettes-info-step';
import ShowInfoStep from './show-info-step';

import './style.scss';

const StartData = (props) => {
  return (
    <div className='container'>
      <h3>StartData</h3>
      <Wizard>
        <Wizard.Step hideControll={true}>
          <StartStep />
        </Wizard.Step>
        <Wizard.Step>
          <TermDateStep />
        </Wizard.Step>
        <Wizard.Step>
          <CommonInfoStep />
        </Wizard.Step>
        <Wizard.Step>
          <CigarettesInfoStep />
        </Wizard.Step>
        <Wizard.Step hideControll={true}>
          <ShowInfoStep />
        </Wizard.Step>
      </Wizard>
    </div>
  );
}

export default StartData;
