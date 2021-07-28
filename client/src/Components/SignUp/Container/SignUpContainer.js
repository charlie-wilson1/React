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

    // const [isFormSubmit, setIsFormSubmit] = useState(false);
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
        becomeAmember: true,
        congrats: false,
        setChildAccount: false,
        createStudentProfile: false
    });
    // const initialChildDataState = {
    //     isLastChild: false,
    //     submitWasClicked: false,
    //     firstName: '',
    //     lastName: '',
    //     birthday: '',
    //     gender: '',
    //     grade: '',
    //     school: '',
    //     teachersEmail: '',
    //     teachersName: '',
    //     schoolDistrict: '',
    //     isOkayToEmailTeacher: true,
    // }
    // const [dataForAllChildren, setDataForAllChildren] = useState()
    const [childData, setChildData] = useState({
        isLastChild: false,
        childNumber: 0,
        submitWasClicked: false,
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
    const [initialStateForAllChildData, setInitialStateForAllChildData] = useState({})
    useEffect(() => {
        if (!allParentInfoFormVals.isError && !allPaymentFormValues.isError) {
            console.log('NO ERRORS')
            let initialStateForChildObject = {};
            for (let i = 1; i <= childCount; i++) {
                initialStateForChildObject[`child${i}`] = ''

            }
            setInitialStateForAllChildData(initialStateForChildObject)
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
                setStepInProcess({...stepInProcess, becomeAmember: false, congrats: true})
            })
            .catch(error => {
                console.log('axiosError', error)
            })
        }
    }, [allParentInfoFormVals, allPaymentFormValues])
    //sen
    useEffect(() => {
        if (childData.submitWasClicked) {
            let num = `child${childData.childNumber}`
            if (!childData.isLastChild) {
                // dataForAllChildren[`${childData.firstName}`] = childData
                setInitialStateForAllChildData({...initialStateForAllChildData, ...childData})
                console.log('all data not last : ', initialStateForAllChildData)
            } else {
                // dataForAllChildren[`${childData.firstName}`] = childData
                setInitialStateForAllChildData({...initialStateForAllChildData, ...childData})
                console.log('all data last : ', initialStateForAllChildData)

            }
        }
    },[childData])

    return (
        <SignUpContext.Provider value={{
            // isFormSubmit, setIsFormSubmit,
            childCount,setChildCount,
            planSelected,setPlanSelected,
            price, setPrice,
            allPaymentFormValues, setAllPaymentFormValues,
            allParentInfoFormVals, setAllParentInfoFormVals, 
            stepInProcess, setStepInProcess, 
            childData, setChildData,
            initialStateForAllChildData, 
        }}>
            {stepInProcess.becomeAmember && <SignUp />}
            {stepInProcess.congrats && <Congrats />}
            {stepInProcess.setChildAccount && <CreateChildAccount />}
            {stepInProcess.createStudentProfile && <StudentCreateProfile />}
        </SignUpContext.Provider>
    )
}
