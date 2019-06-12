import { AT_COUNTER_INC, AT_COUNTER_DEC, AT_COUNTER_RES } from '../constants';

const initState = {
  count: 0,
}

const counter = (state = initState, action) => {
  switch(action.type) {
    case AT_COUNTER_INC: {
      const newState = { ...state, count: state.count + 1 };
      return newState;
    }
    case AT_COUNTER_DEC: {
      const newState = { ...state, count: state.count - 1 };
      return newState;
    }
    case AT_COUNTER_RES: {
      const newState = { ...state, count: 0 };
      return newState;
    }
    default: return state;
  }
}

export default counter;
