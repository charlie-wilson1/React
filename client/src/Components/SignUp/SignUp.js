import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { StyleSheet, css } from 'aphrodite';

import ProgressTracker from './ProgressTracker';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [confirmEmail, setConfirmEmail] = useState()
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
        <div className={css(styles.MainContainer)}>
            {/* <form onSubmit={handleSubmit(onSubmit)} className={css(styles.FormContainer)}>
                <input className={css(styles.InputContainer)} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})}/>
                <input className={css(styles.InputContainer)} onChange={setConfirmEmail} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Confirm Email" {...register("Confirm Email", {required: true, pattern: /^\S+@\S+$/i, validate: (value) => console.log(errors.Email)})}/>
                {errors['Confirm Email'] && <p style={{color: 'red'}}>Your Email Doesnt Match</p>}
                <input className={css(styles.InputContainer)}  type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, min:12, maxLength: 12})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Childs name" {...register("Childs name", {required: true, maxLength: 80})}/>
                <input className={css(styles.InputContainer)}  type="number" placeholder="Childs Age" {...register("Childs Age", {required: true})} />

                <input className={css(styles.SubmitButton)}  type="submit" value="Create Account"/>
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)} className={css(styles.FormContainer)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="email" placeholder="Confirm Email" {...register("Confirm Email", {required: true, maxLength: 12, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Password" {...register("Password", {required: true, min: 6, maxLength: 15})} />
      <input type="text" placeholder="Confirm Password" {...register("Confirm Password", {required: true})} />
      <label htmlFor="How did you hear about Learnatric? Select One">How did you hear about Learnatric? Select One</label>
      <select {...register("How did you hear about Learnatric? Select One", { required: true })}>
        <option value="Google">Google</option>
        <option value="Facebook">Facebook</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Other">Other</option>
      </select>
      <select {...register("Choose Plan", { required: true })}>
        <option value="Monthly">Monthly</option>
        <option value="Yearly -> Save 33%!">Yearly -> Save 33%!</option>
      </select>
      <input type="range" placeholder="Choose Number of Children" {...register("Choose Number of Children", {required: true, min: 1})} />
      <input type="text" placeholder="Cardholder Name" {...register("Cardholder Name", {required: true})} />
      <input type="number" placeholder="Credit Card Number" {...register("Credit Card Number", {})} />
      <input type="text" placeholder="Expiration Date" {...register("Expiration Date", {required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/i})} />
      <input type="number" placeholder="CVV" {...register("CVV", {required: true, min: 3, maxLength: 4})} />
      <input type="number" placeholder="Billing Zip Code" {...register("Billing Zip Code", {required: true})} />

      <input type="submit" />
    </form>
        </div>
        </>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: "flex", 
        justifyContent: "center", 
        marginTop: "25%", 
        // alignContent: "center",
        width: '100%',

    },
    FormContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'center',
    },
    InputContainer: {
        fontSize: '18px',
        height: '30px',
        marginTop: '10px'
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
