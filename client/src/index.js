import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

import AppMain from './Components/AppMain';
import store from './store.js';

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppMain/> 
        </Router>
    </Provider>,
    root
);