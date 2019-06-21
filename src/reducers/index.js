import { combineReducers } from 'redux';
import counter from './test-reducer';
import wizard from './wizard';
import smokingData from './smoking-data';

const rootReducer = combineReducers({
  counter,
  wizard,
  smokingData,
});

export default rootReducer;
