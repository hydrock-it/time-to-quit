import { UPDATE_USER, UPDATE_USER_SMOKING_DATA } from './types';

export const updateUserSmokingDataAC = payload => (dispatch) => {
  dispatch({
    type: UPDATE_USER_SMOKING_DATA,
    payload,
  });
};

export const updateUserAC = payload => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload,
  });
};
