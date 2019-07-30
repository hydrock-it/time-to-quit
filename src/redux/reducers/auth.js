import { actionsType } from '../../constants';

const initState = {
  loggingIn: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsType.SET_AUTH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: return state;
  }
};
