import { combineReducers } from 'redux';
import listReducer from './listReducer';

// Combine Reducers
const rootReducer = combineReducers({
  list: listReducer,
  // Add other reducers here if you have more
});

export default rootReducer;