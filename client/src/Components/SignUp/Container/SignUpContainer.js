import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import SignUp from '../SignUp';
import Congrats from '../Congrats';
import CreateChildAccount from '../CreateChildAccount/CreateChildAccount';
import StudentCreateProfile from '../StudentCreateProfile/StudentCreateProfile';

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
        congrats: false,
        setChildAccount: true,
        createStudentProfile: false
    });
    const [childData, setChildData] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        grade: '',
        school: '',
        teachersEmail: '',
        teachersName: '',
        schoolDistrict: '',
        isOkayToEmailTeacher: true,
    })
    //send all parent info and cc data to back end ad if all goes well render page to enter child data
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
    //sen
    useEffect(() => {
        console.log('childData: ', childData)
    },[childData])

    return (
        <SignUpContext.Provider value={{
            isFormSubmit, setIsFormSubmit,
            childCount,setChildCount,
            planSelected,setPlanSelected,
            price, setPrice,
            allPaymentFormValues, setAllPaymentFormValues,
            allParentInfoFormVals, setAllParentInfoFormVals, 
            stepInProcess, setStepInProcess, 
            childData, setChildData
        }}>
            {stepInProcess.becomeAmember && <SignUp />}
            {stepInProcess.congrats && <Congrats />}
            {stepInProcess.setChildAccount && <CreateChildAccount />}
            {stepInProcess.createStudentProfile && <StudentCreateProfile />}
        </SignUpContext.Provider>
    )
}
