import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionsType } from '../../../constants';

import './StartSpet.scss';

const StartStep = (props) => {
  const { nextStep } = props;
  return (
    <div className="start-step">
      <h3>Вы готовы?</h3>
      <button type="button" onClick={nextStep}>Начинаем!</button>
    </div>
  );
};

const mapStateToProps = store => ({
  step: store.wizard.step,
});

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch({ type: actionsType.STEP_NEXT }),
});

StartStep.propTypes = {
  nextStep: PropTypes.func,
};

StartStep.defaultProps = {
  nextStep: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(StartStep);
