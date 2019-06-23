import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsType } from '../../../constants';
import Step from './step'
import PropTypes from 'prop-types';

class Wizard extends Component {
  
  static Step = (props) => <Step {...props} />

  render() {
    const { children, step, nextStep, prevStep } = this.props;
    
    return (
      <div className="wizard">
        { 
          React.Children.map(children, (item, index) => {
            if (index === step) {
              return React.cloneElement(item, {
                currentIndex: step,
                nextStep: nextStep,
                prevStep: prevStep,
                isLast: step === this.props.children.length - 1,
                isFirst: step === 0
              })
            }
            return null;
          })
        }
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
    prevStep: () => dispatch({ type: actionsType.STEP_PREV }),
  }
}

Wizard.propTypes = {
  step: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
