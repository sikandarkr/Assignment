import { combineReducers } from 'redux';
import listReducer from './listReducer';

// Reducers
const initialState = {
  counter: 0,
};

// Combine Reducers
const rootReducer = combineReducers({
  list: listReducer,
  // Add other reducers here if you have more
});

export default rootReducer;