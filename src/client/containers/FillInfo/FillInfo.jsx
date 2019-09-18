import React from 'react';
import { Wizard } from '../../components';
import StartStep from './StartStep/StartSpet';
import TermDateStep from './TermDateStep/TermDateStep';
import CommonInfoStep from './CommonInfoStep/CommonInfoStep';
import CigarettesInfoStep from './CigarettesInfoStep/CigarettesInfoStep';
import ShowInfoStep from './ShowInfoStep/ShowInfoStep';

import './FillInfo.scss';

const FillInfo = () => (
  <div className="uk-container uk-position-center uk-text-center">
    <Wizard>
      <Wizard.Step hideControll>
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
      <Wizard.Step hideControll>
        <ShowInfoStep />
      </Wizard.Step>
    </Wizard>
  </div>
);

export default FillInfo;
