import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AT_COUNTER_INC, AT_COUNTER_DEC, AT_COUNTER_RES } from '../../../constants';
import store from '../../../store';

import './style.scss';

class Counter extends Component {

  onChangeCounter(type) {
    store.dispatch({ type });
  }

  render() {
    const { counter } = this.props
    return (
      <div className='counter'>
        <span>Count: { counter.count } </span>
        <div>
          <button onClick={() => this.onChangeCounter(AT_COUNTER_INC)}>INC +</button>
          <button onClick={() => this.onChangeCounter(AT_COUNTER_RES)}>RES ↻</button>
          <button onClick={() => this.onChangeCounter(AT_COUNTER_DEC)}>DEC -</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.counter
  }
}

export default connect(mapStateToProps)(Counter);
