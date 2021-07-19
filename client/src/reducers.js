import { combineReducers } from "redux";

import main from './reducers/main';

const appReducer = combineReducers({
  main,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;