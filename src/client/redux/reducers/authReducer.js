import isEmpty from 'is-empty';
import { SET_AUTHENTICATED, USER_LOADING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
