import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsType } from '../../../../constants';

import './style.scss';

class StartStep extends Component {
  render() {
    const { nextStep } = this.props;
    return (
      <div className='start-step'>
        <h3>StartStep</h3>
        <button onClick={nextStep} >Начинаем!</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    step: store.wizard.step
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch({ type: actionsType.STEP_NEXT }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartStep);
