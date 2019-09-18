import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { updateUserAC } from './userActions';

import { GET_ERRORS, SET_AUTHENTICATED, USER_LOADING } from './types';


export const registerUserAC = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then(() => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const setAuthenticatedAC = decoded => ({
  type: SET_AUTHENTICATED,
  payload: decoded,
});

export const loginUserAC = userData => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setAuthenticatedAC(decoded));
      dispatch(updateUserAC(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const setUserLoadingAC = () => ({
  type: USER_LOADING,
});

export const logoutUserAC = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setAuthenticatedAC({}));
};
