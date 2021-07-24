import React, { useState, createContext } from 'react';

import SignUp from '../SignUp';
// import SignUpContext from '../../../Contexts/SignUpContext';

export const SignUpContext = createContext();

export default function SignUpContainer() {

    const [isFormSubmit, setIsFormSubmit] = useState(false);
    const [childCount, setChildCount] = useState(1);
    const [planSelected, setPlanSelected] = useState('Monthly');
    const [price, setPrice] = useState(29);
    const [allPaymentFormValues, setAllPaymentFormValues] = useState({
        holder_name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        zip: ''
    });
    const [allParentInfoFormVals, setAllParentInfoFormVals] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        password: '',
        hear_about_us: ''
    })

    return (
        <SignUpContext.Provider value={{
            isFormSubmit, setIsFormSubmit,
            childCount,setChildCount,
            planSelected,setPlanSelected,
            price, setPrice,
            allPaymentFormValues, setAllPaymentFormValues,
            allParentInfoFormVals, setAllParentInfoFormVals
        }}>
            <SignUp />
        </SignUpContext.Provider>
    )
}
