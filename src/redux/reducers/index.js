import { combineReducers } from 'redux';
import auth from './auth';
import counter from './test-reducer';
import wizard from './wizard';
import smokingData from './smoking-data';

const rootReducer = combineReducers({
  auth,
  counter,
  wizard,
  smokingData,
});

export default rootReducer;
