import React, { useState, createContext } from 'react';

import SignUp from '../SignUp';
// import SignUpContext from '../../../Contexts/SignUpContext';

export const SignUpContext = createContext();

export default function SignUpContainer() {

    const [childCount, setChildCount] = useState(1);

    return (
        <SignUpContext.Provider value={{
            childCount,
            setChildCount,

        }}>
            <SignUp />
        </SignUpContext.Provider>
    )
}
