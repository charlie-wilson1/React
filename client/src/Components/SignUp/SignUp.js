import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { StyleSheet, css } from 'aphrodite';

import ProgressTracker from './ProgressTracker';
import StaticContent1 from './StaticContent1';
import ChoosePlan from './ChoosePlan';
import ChooseChildren from './ChooseChildren';
import HearFromParents from './HearFromParents';
import PaymentInputs from './PaymentInputs';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [childCount, setChildCount] = useState(1)
    const onSubmit = async (data) =>{ 
        console.log('onSubmitdata: ',errors);
        try {
            let res = await axios({
                method: 'post',
                url: '/signUpForm',
                data: data,
            })
            console.log('axiosRes', res)
            
        } catch (e) {
            console.log(e)
        }
    };
    console.log(errors);
    return (
        <>
            <ProgressTracker />
            <form style={{display: 'grid', gridTemplateRows: '33vh 33vh 33vh', gridTemplateColumns:'50% 50%', height: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                <div className={css(styles.StaticInfoAndImageContainer)}>
                    <StaticContent1 />
                </div>
                <div className={css(styles.ParentInfoFormContainer)}>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            className={css(styles.InputContainer)}
                            type="text"
                            placeholder="First name" 
                            {...register("First name", {required: true, maxLength: 80})} 
                        />
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Last name" 
                            {...register("Last name", {required: true, maxLength: 100})} 
                        />
                    </div>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Email" 
                            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
                        />
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Confirm Email" 
                            {...register("Confirm Email", {required: true, pattern: /^\S +@\S +$/i})} 
                        />
                    </div>
                    <div className={css(styles.SideBySideInput)}>
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Password" 
                            {...register("Password", {required: true, min: 6, maxLength: 15})} 
                        />
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Confirm Password" 
                            {...register("Confirm Password", {required: true})} 
                        />
                    </div>
                    <div className={css(styles.SelectContainer)}>
                        <label 
                            className={css(styles.LabelText)}
                            htmlFor="How did you hear about Learnatric? Select One"
                        >
                            How did you hear about Learnatric? Select One
                        </label>
                        <select className={css(styles.SelectDropDown)}{...register("How did you hear about Learnatric? Select One",{required: true })}>
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
                        <PaymentInputs/>
                    </div>
            </form>
        </>
    );
}

const styles = StyleSheet.create({
    StaticInfoAndImageContainer: {
        gridRow: 1,
        gridColumn: 1,
        display: "flex",
        justifyContent: 'center'
    },
    ParentInfoFormContainer: {
        gridRow: 1,
        gridColumn: 2,
        display: "flex",
        flexDirection: 'column',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    SideBySideInput: {
        display: "flex", 
        justifyContent: 'space-between'
    },
    InputContainer: {
        fontSize: '18px',
        height: '30px',
        width: '200px',
        marginTop: '20px'
    },
    SelectContainer: {
        display: "flex", 
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px'
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
        borderRadius:'6px',
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
        // display: 'flex',
        // flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ChooseChildrenContainer: {
        gridRow: 2,
        gridColumn: 1,
        // display: 'flex',
        // flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    HearFromParentsContainer: {
        gridRow: 2,
        gridColumn: 2
    },
    PaymentFormContainer: {
        gridRow: 3,
        gridColumn: '1 / span 2',
    },
    SubmitButton: {
        fontSize: '18px',
        marginTop: '5px',
        height: '29px',
        padding: '4px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#facf61',
        ':hover': {
            cursor: 'pointer',
            border: '2px solid',
        }

    }
})
