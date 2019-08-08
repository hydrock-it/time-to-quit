import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionsType } from '../../constants';
import Step from './Step/Step';

class Wizard extends Component {
  static Step = props => <Step {...props} />

  render() {
    const {
      children, step, nextStep, prevStep,
    } = this.props;

    return (
      <div className="wizard">
        {
          React.Children.map(children, (item, index) => {
            if (index === step) {
              return React.cloneElement(item, {
                currentIndex: step,
                nextStep,
                prevStep,
                isLast: step === children.length - 1,
                isFirst: step === 0,
              });
            }
            return null;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  step: store.wizard.step,
});

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch({ type: actionsType.STEP_NEXT }),
  prevStep: () => dispatch({ type: actionsType.STEP_PREV }),
});

Wizard.propTypes = {
  step: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  children: PropTypes.node,
};

Wizard.defaultProps = {
  step: 0,
  nextStep: () => {},
  prevStep: () => {},
  children: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
