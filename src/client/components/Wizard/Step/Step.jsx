import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { styleClasses } from '../../../constants';
import './Step.scss';

const Step = (props) => {
  const {
    children, nextStep, prevStep, isLast, isFirst, hideControll,
  } = props;
  return (
    <div className="uk-container">
      <div className="uk-flex uk-flex-column" uk-grid="true">
        <div className="uk-animation-slide-top uk-width-auto">
          { children }
        </div>
        <div className="uk-child-width-1-2" uk-grid="true">
          <div className="uk-width-1-2">
            <button
              type="button"
              className={classnames(styleClasses.BUTTON_TEXT, 'uk-text-large uk-text-bold')}
              onClick={prevStep}
              disabled={isFirst}
              hidden={hideControll}
            >
              ←
            </button>
          </div>
          <div className="uk-width-1-2">
            <button
              type="button"
              className={classnames(styleClasses.BUTTON_TEXT, 'uk-text-large uk-text-bold')}
              onClick={nextStep}
              disabled={isLast}
              hidden={hideControll}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Step.propTypes = {
  children: PropTypes.node,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
  hideControll: PropTypes.bool,
};

Step.defaultProps = {
  children: {},
  nextStep: () => {},
  prevStep: () => {},
  isLast: false,
  isFirst: false,
  hideControll: false,
};

export default Step;
