import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import SignUp from '../SignUp';
import Congrats from '../Congrats';
import CreateChildAccount from '../CreateChildAccount';
// import SignUpContext from '../../../Contexts/SignUpContext';

export const SignUpContext = createContext();

export default function SignUpContainer() {
    const history = useHistory();

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
    });
    const [stepInProcess, setStepInProcess] = useState({
        becomeAmember: false,
        congrats: true,
        setChildAccount: false,

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
            .then(response => {
                console.log('axiosResp', response);
                setStepInProcess({becomeAmember: false, congrats: true})
                // history.push('/congrats')
            })
            .catch(error => {
                console.log('axiosError', error)
            })
        }
    }, [allParentInfoFormVals, allPaymentFormValues])

    return (
        <SignUpContext.Provider value={{
            isFormSubmit, setIsFormSubmit,
            childCount,setChildCount,
            planSelected,setPlanSelected,
            price, setPrice,
            allPaymentFormValues, setAllPaymentFormValues,
            allParentInfoFormVals, setAllParentInfoFormVals, 
            stepInProcess, setStepInProcess
        }}>
            {stepInProcess.becomeAmember && <SignUp />}
            {stepInProcess.congrats && <Congrats />}
            {stepInProcess.setChildAccount && <CreateChildAccount />}
        </SignUpContext.Provider>
    )
}
