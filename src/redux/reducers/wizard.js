import { actionsType } from '../../constants';

const initState = {
  step: 0,
};

const wizard = (state = initState, action) => {
  switch (action.type) {
    case actionsType.STEP_NEXT: {
      return { ...state, step: state.step + 1 };
    }
    case actionsType.STEP_PREV: {
      return { ...state, step: state.step - 1 };
    }
    default: return state;
  }
};

export default wizard;
