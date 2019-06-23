import { actionsType } from '../constants';

const initState = {
  dateOfTerminated: new Date('1970-01-01').toJSON(),
  cigarettesInPack: 20,
  cigarettesInDay: 0,
  price: 0,
  nicotine: 0,
  tar: 0,
};

const smokingData = (state = initState, action) => {
  switch (action.type) {
    case actionsType.SET_SMOKING_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: return state;
  }
};

export default smokingData;
