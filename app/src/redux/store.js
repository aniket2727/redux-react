


// store.js
import { createStore, combineReducers } from 'redux';
import emailReducer from './reducers';

const rootReducer = combineReducers({
  email: emailReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
