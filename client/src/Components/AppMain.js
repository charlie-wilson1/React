import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import NavBar from './Common/NavBar';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

export default function AppMain() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
            </Switch>
        </div>
    )
}
