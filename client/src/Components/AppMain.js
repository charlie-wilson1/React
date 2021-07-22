import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import NavBar from './Common/NavBar';
import Home from './Home/Home';
// import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

import {MainContext} from '../Contexts/MainContext';


export default function AppMain() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [isLoginError, setIsLoginError] = useState(false);

    useEffect(() => {
        console.log('isLoggedIn: ', isLoggedIn)
    }, [isLoggedIn])


    return (
        <MainContext.Provider value={{isLoggedIn, setIsLoggedIn, isLoginError, setIsLoginError}}>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    {/* <Home/> */}
                    <SignUp/>
                </Route>
                {/* <Route path="/login">
                    <Login/>
                </Route> */}
                <Route path="/signup">
                    <SignUp/>
                </Route>
            </Switch>
        </MainContext.Provider>
    )
}
