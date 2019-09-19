import { combineReducers } from 'redux';
import auth from './authReducer';
import errors from './errorReducer';
import wizard from './wizardReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  auth,
  errors,
  user,
  wizard,
});

export default rootReducer;
