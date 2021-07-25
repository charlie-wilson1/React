import React, {useState, useEffect, useContext} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { StyleSheet, css } from 'aphrodite';

import ProgressTracker from './ProgressTracker';
import StaticContent1 from './StaticContent1';
import ChoosePlan from './ChoosePlan';
import ChooseChildren from './ChooseChildren';
import HearFromParents from './HearFromParents';
import PaymentInputs from './PaymentInputs';

import { SignUpContext } from './Container/SignUpContainer';




export default function SignUp() {
    const { allParentInfoFormVals, setAllParentInfoFormVals, isFormSubmit, setIsFormSubmit, } = useContext(SignUpContext);
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = (data) =>{ 
        console.log('data" ', data)
        console.log('onSubmitdataerrorSIGNUP: ',errors);
        setAllParentInfoFormVals({...allParentInfoFormVals, FirstName: data.FirstName, LastName: data.LastName, Email: data.Email, password: data.password, hear_about_us: data.hear_about_us, holder_name: data.holder_name, isError: false})
    };
    useEffect(() => {
        console.log('on change: ', allParentInfoFormVals)
    }, [allParentInfoFormVals])
    const CardHolderName = () => {
        return (
            <input 
                className={css(errors.holder_name ? styles.InputErrorHolder : styles.InputCardHolder)}
                name="holder_name"
                type="text"
                placeholder={errors.holder_name ? errors.holder_name.message : "Card Holder Name"}
                {...register("holder_name", {required: 'Name required!'})}
            />
        )
    }
    return (
        <>
            <ProgressTracker />
        <div className={css(styles.MainContainer)}>
            <form style={{display: 'grid', gridTemplateRows: '33vh 33vh 45vh', gridTemplateColumns:'50% 50%', height: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                <div className={css(styles.StaticInfoAndImageContainer)}>
                    <StaticContent1 />
                </div>
                <div className={css(styles.ParentInfoFormContainer)}>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            name="FirstName"
                            className={css(errors.FirstName ? styles.InputError : styles.InputContainer)}
                            type="text"
                            placeholder={errors.FirstName ? errors.FirstName.message : "First name"} 
                            {...register("FirstName", {required: 'First name required!', maxLength: 80})} 
                        />
                        <input 
                            name="LastName"
                            className={css(errors.LastName ? styles.InputError : styles.InputContainer)}
                            type="text" 
                            placeholder={errors.LastName ? errors.LastName.message : "Last name"} 
                            {...register("LastName", {required: 'Last name required!', maxLength: 100})} 
                        />
                    </div>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            name="Email"
                            className={css(errors.Email ? styles.InputError : styles.InputContainer)}
                            type="text" 
                            placeholder={errors.Email ? errors.Email.message : "Email"} 
                            {...register("Email", {required: "Email is required!", pattern: /^\S+@\S+$/i})} 
                        />
                        <input 
                            className={css(errors.ConfirmEmail ? styles.InputError : styles.InputContainer)}
                            type="text" 
                            placeholder={errors.ConfirmEmail ? errors.ConfirmEmail.message : "Confirm email"} 
                            {...register("ConfirmEmail", {
                                required: "Please confirm email", 
                                pattern: /^\S+@\S+$/i,
                                validate: {
                                    matchesPreviousEmail: (value) => {
                                        const { Email } = getValues();
                                        return Email === value || "Emails should match!";
                                    }
                                }
                            })} 
                        />
                    </div>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            name="password"
                            className={css(errors.password ? styles.InputError : styles.InputContainer)}
                            type="password" 
                            placeholder={errors.password ? errors.password.message : "Password"} 
                            {...register("password", { required: "Password is required!" })}
                            />
                        <input
                            className={css(errors.passwordConfirmation ? styles.InputError : styles.InputContainer)}
                            type="password"
                            placeholder={errors.passwordConfirmation ? errors.passwordConfirmation.message : "Confirm password"}
                            {...register("passwordConfirmation", {
                                required: "Please confirm password!",
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                }
                            })}
                        />
                    </div>
                    <div className={css(styles.SelectContainer)}>
                        <label 
                            className={css(styles.LabelText)}
                            htmlFor="hear_about_us"
                        >
                            How did you hear about Learnatric? Select One
                        </label>
                        <select className={css(styles.SelectDropDown)}{...register("hear_about_us",{required: true })}>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Word of Mouth">Word of Mouth</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className={css(styles.BottomHalfContainer)}>
                    <div className={css(styles.PlanContainer)}>
                        <ChoosePlan />
                    </div>
                    <div className={css(styles.ChooseChildrenContainer)}>
                        <ChooseChildren />
                    </div>
                </div>
                    <div className={css(styles.HearFromParentsContainer)}>
                        <HearFromParents />
                    </div>
                    <div className={css(styles.PaymentFormContainer)}>
                        <PaymentInputs CardHolderName={CardHolderName}/>
                    </div>
            </form>
        </div>
        </>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        fontSize: '22px',
        width: '60em',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden'
    },
    StaticInfoAndImageContainer: {
        gridRow: 1,
        gridColumn: 1,
        display: "flex",
        marginLeft: '5em'
    },
    ParentInfoFormContainer: {
        gridRow: 1,
        gridColumn: 2,
        display: "flex",
        flexDirection: 'column',
    },
    SideBySideInput: {
        display: "flex", 
        width: '100%',
        justifyContent: 'space-between'
    },
    InputContainer: {
        fontSize: '18px',
        height: '35px',
        width: '45%',
        marginTop: '2em',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    InputError: {
        fontSize: '18px',
        '::placeholder': {
            
            color: 'red',
        },
        height: '35px',
        width: '45%',
        marginTop: '2em',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    SelectContainer: {
        display: "flex", 
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px',
        
    },
    LabelText: {
        fontSize: '20px',
        fontFamily: 'Asap, sans-serif',
        alignSelf: 'center',
    },
    SelectDropDown: {
        background:'#faeaa7',
        width: '70%',
        height: '30px',
        color: 'black',
        cursor: 'pointer',
        border:'1px solid black',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        fontSize: '20px',
        fontFamily: 'Asap, sans-serif',
        alignSelf: 'center',
    },
    BottomHalfContainer: {
        gridRow: 2,
        gridColumn: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    PlanContainer: {
        gridRow: 2,
        gridColumn: 1,
        marginLeft: '5em',
    },
    ChooseChildrenContainer: {
        gridRow: 2,
        gridColumn: 1,
        marginLeft: '5em',
        marginTop: 'auto',
    },
    HearFromParentsContainer: {
        gridRow: 2,
        gridColumn: 2
    },
    PaymentFormContainer: {
        gridRow: 3,
        gridColumn: '1 / span 2',
        width: '90%',
        marginTop: '2em',
        marginLeft: '5.2em',
        marginRight: 'auto',
    },
    InputCardHolder: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
        height: '35px',
        width: '50%',
        marginTop: '.5em'
    },
    InputErrorHolder: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
        height: '35px',
        width: '50%',
        marginTop: '.5em',
        '::placeholder': {
            color: 'red'
        }
    },
    SubmitButton: {
        fontSize: '18px',
        marginTop: '5px',
        height: '29px',
        padding: '4px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#facf61',
        ':hover': {
            cursor: 'pointer',
            border: '2px solid',
        }

    }
})
