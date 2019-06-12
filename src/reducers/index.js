import { combineReducers } from 'redux';
import counter from './test-reducer';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
