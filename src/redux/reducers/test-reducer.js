import { actionsType } from '../../constants';

const initState = {
  count: 0,
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case actionsType.COUNTER_INC: {
      return { ...state, count: state.count + 1 };
    }
    case actionsType.COUNTER_DEC: {
      return { ...state, count: state.count - 1 };
    }
    case actionsType.COUNTER_RES: {
      return { ...state, count: 0 };
    }
    default: return state;
  }
};

export default counter;
