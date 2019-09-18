import { STEP_NEXT, STEP_PREV, RESET_STEP } from '../actions/types';

const initState = {
  step: 0,
};

const wizard = (state = initState, action) => {
  switch (action.type) {
    case STEP_NEXT: {
      return { ...state, step: state.step + 1 };
    }
    case STEP_PREV: {
      return { ...state, step: state.step - 1 };
    }
    case RESET_STEP: {
      return {
        step: 0,
      };
    }
    default: return state;
  }
};

export default wizard;
