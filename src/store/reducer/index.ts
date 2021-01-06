import { combineReducers } from 'redux';
import sequence from './sequenceReducer';

const rootReducer = combineReducers({
  sequence,
});

export default rootReducer;
