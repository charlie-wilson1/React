import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { StyleSheet, css } from 'aphrodite';

import ProgressTracker from './ProgressTracker';
import StaticContent1 from './StaticContent1';
import ChoosePlan from './ChoosePlan';

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
            {/* <div className={css(styles.MainContainer)}> */}
                <form style={{display: 'grid', gridTemplateRows: '50vh 50vh', gridTemplateColumns:'50% 50%', height: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className={css(styles.ParentInfoContainer)}> */}
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
                                <select className={css(styles.SelectDropDown)}{...register("How did you hear about Learnatric? Select One",{ required: true })}>
                                    <option value="Google">Google</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Word of Mouth">Word or Mouth</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    {/* </div> */}
                    <div className={css(styles.PaymentInfoContainer)}>
                        {/* <select className={css(styles.InputContainer)}{...register("Choose Plan", { required: true })}>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly -> Save 33%!">Yearly -> Save 33%!</option>
                        </select> */}
                        <ChoosePlan />
                        <input 
                            type="range" 
                            placeholder="Choose Number of Children" 
                            {...register("Choose Number of Children", {required: true, min:1})}/
                        >
                        <input 
                            type="text" 
                            placeholder="Cardholder Name" 
                            {...register("Cardholder Name", {required: true})} 
                        />
                        <input 
                            type="number" 
                            placeholder="Credit Card Number" 
                            {...register("Credit Card Number", {})} 
                        />
                        <input 
                            type="text" 
                            placeholder="Expiration Date" 
                            {...register("Expiration Date", {required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/i})} 
                        />
                        <input 
                            type="number" 
                            placeholder="CVV" 
                            {...register("CVV", {required: true, min: 3, maxLength: 4})} 
                        />
                        <input 
                            type="number" 
                            placeholder="Billing Zip Code" 
                            {...register("Billing Zip Code", {required: true})} 
                        />

                        <input type="submit" />
                    </div>
                </form>
            {/* </div> */}
        </>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        // display: "grid", 
        // gridTemplateRows: '50% 50%',
        // height: '100%'
    },
    // ParentInfoContainer: {
    //     gridRow: 1,
    //     display: "grid", 
    //     gridTemplateColumns: '50% 50%'
    // },
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
        marginBottom: 'auto'
        // alignContent: 'center'
    },
    SideBySideInput: {
        display: "flex", 
        justifyContent: 'space-around'
    },
    InputContainer: {
        fontSize: '18px',
        height: '30px',
        width: '15em',
        marginTop: '10px'
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
        // appearance: 'none',
        // outline: 0,
        // background-image: none,
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
