import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsType } from '../../../constants';
import PropTypes from 'prop-types';

import './style.scss';

class Counter extends Component {

  render() {
    const { counter, increment, decrement, reset } = this.props
    return (
      <div className='counter'>
        <span>Count: { counter.count } </span>
        <div>
          <button onClick={ increment }>INC +</button>
          <button onClick={ decrement }>RES ↻</button>
          <button onClick={ reset }>DEC -</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: actionsType.COUNTER_INC }),
    decrement: () => dispatch({ type: actionsType.COUNTER_RES }),
    reset: () => dispatch({ type: actionsType.COUNTER_DEC })
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
