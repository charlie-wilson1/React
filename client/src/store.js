import { compose, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./reducers.js";


// const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;