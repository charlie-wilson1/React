import React, { useState, createContext } from 'react';

import SignUp from '../SignUp';
// import SignUpContext from '../../../Contexts/SignUpContext';

export const SignUpContext = createContext();

export default function SignUpContainer() {

    const [childCount, setChildCount] = useState(1);
    const [planSelected, setPlanSelected] = useState('Monthly');
    const [allPaymentFormValues, setAllPaymentFormValues] = useState({
        holder_name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        zip: ''
    })

    return (
        <SignUpContext.Provider value={{
            childCount,
            setChildCount,
            planSelected,
            setPlanSelected,
            allPaymentFormValues, 
            setAllPaymentFormValues,
        }}>
            <SignUp />
        </SignUpContext.Provider>
    )
}