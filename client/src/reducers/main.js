import {
  IS_LOGGED_IN
} from '../types/main.js';

const initialState = {
  isLoggedIn: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      }
    default:
      return state
  }
};