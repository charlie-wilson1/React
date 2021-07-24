import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

import SignUp from '../SignUp';
// import SignUpContext from '../../../Contexts/SignUpContext';

export const SignUpContext = createContext();

export default function SignUpContainer() {

    const [isFormSubmit, setIsFormSubmit] = useState(false);
    const [childCount, setChildCount] = useState(1);
    const [planSelected, setPlanSelected] = useState('Monthly');
    const [price, setPrice] = useState(29);
    const [allPaymentFormValues, setAllPaymentFormValues] = useState({
        isError: true,
        holder_name: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        zip: '',
        meta_error: ''
    });
    const [allParentInfoFormVals, setAllParentInfoFormVals] = useState({
        isError: true,
        FirstName: '',
        LastName: '',
        Email: '',
        password: '',
        hear_about_us: '',
    })
    useEffect(() => {
        if (!allParentInfoFormVals.isError && !allPaymentFormValues.isError) {
            console.log('NO ERRORS')
            const data = {
                parent_info: allParentInfoFormVals, 
                payment_info: allPaymentFormValues,
                price: price, 
                plan_selected: planSelected, 
                child_count: childCount
            }
            axios.post('parentSignUp', data)
        }
    }, [allParentInfoFormVals, allPaymentFormValues])

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
