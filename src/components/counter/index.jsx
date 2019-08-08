import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionsType } from '../../constants';

import './style.scss';

const Counter = (props) => {
  const {
    counter, increment, decrement, reset,
  } = props;
  return (
    <div className="counter">
      <span>
        Count:
        { counter.count }
      </span>
      <div>
        <button type="button" onClick={increment}>INC +</button>
        <button type="button" onClick={decrement}>RES ↻</button>
        <button type="button" onClick={reset}>DEC -</button>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  counter: store.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: actionsType.COUNTER_INC }),
  decrement: () => dispatch({ type: actionsType.COUNTER_RES }),
  reset: () => dispatch({ type: actionsType.COUNTER_DEC }),
});

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
};

Counter.defaultProps = {
  counter: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
