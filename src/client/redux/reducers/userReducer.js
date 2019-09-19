import { UPDATE_USER_SMOKING_DATA, UPDATE_USER } from '../actions/types';

const initialState = {
  name: '',
  email: '',
  smokingData: {
    dateOfTerminated: new Date('1970-01-01').toJSON(),
    cigarettesInPack: 20,
    cigarettesInDay: 0,
    price: 0,
    nicotine: 0,
    tar: 0,
  },
  isNewUser: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
        updated: new Date().toJSON(),
      };
    case UPDATE_USER_SMOKING_DATA:
      return {
        ...state,
        smokingData: {
          ...state.smokingData,
          ...action.payload,
        },
        updated: new Date().toJSON(),
      };
    default:
      return state;
  }
}
