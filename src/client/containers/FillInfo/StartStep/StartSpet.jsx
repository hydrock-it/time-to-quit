import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { STEP_NEXT } from '../../../redux/actions/types';
import { styleClasses } from '../../../constants';

import './StartSpet.scss';

const StartStep = (props) => {
  const { nextStep } = props;
  return (
    <div className="uk-container uk-text-center">
      <h3 className="uk-text-bold uk-text-uppercase uk-text-center uk-heading-medium">Вы готовы?</h3>
      <button type="button" onClick={nextStep} className={styleClasses.BUTTON}>Начинаем!</button>
    </div>
  );
};

const mapStateToProps = store => ({
  step: store.wizard.step,
});

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch({ type: STEP_NEXT }),
});

StartStep.propTypes = {
  nextStep: PropTypes.func,
};

StartStep.defaultProps = {
  nextStep: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(StartStep);
