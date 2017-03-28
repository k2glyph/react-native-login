
import { combineReducers } from 'redux';


import router from '@redux/router/reducer';


// Combine all
const appReducer = combineReducers({
  router,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
