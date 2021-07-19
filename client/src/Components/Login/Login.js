import React, { useContext } from 'react';

import { MainContext } from '../../Contexts/MainContext';

export default function Login() {

    const { setIsLoggedIn } = useContext(MainContext);


    return (
        <div>
            This Is Login Page
            <button onClick={() => setIsLoggedIn(true)} >Button</button>
        </div>
    )
}
