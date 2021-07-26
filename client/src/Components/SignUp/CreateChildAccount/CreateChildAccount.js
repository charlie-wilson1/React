import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useForm } from 'react-hook-form';

import ProgressTracker from '../ProgressTracker';
import { SignUpContext } from '../Container/SignUpContainer';

import FullExperience from './FullExperience';

const Form = ({index}) => {

    console.log('key: ', index)
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    
    return (
        <div className={css(styles.Form)}>
            <div className={css(styles.HeadderText)}>Create Student {index === 0 ? '' : index+1+"'s"} Account</div>
            <form className={css(styles.FormContainer)}>
                <div className={css(styles.ChildFormContainer)}>
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
                    <div className={css(styles.SelectContainer)}>
                        <label 
                            className={css(styles.LabelText)}
                            htmlFor="gender"
                        >
                            Gender *not required
                        </label>
                        <select 
                            className={css(styles.SelectDropDown)}
                            {...register("gender")}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="neither">neither</option>
                        </select>
                    </div> 
                    <div className={css(styles.SelectContainer)}>
                        <label 
                            className={css(styles.LabelText)}
                            htmlFor="birthday"
                        >
                            Birthday
                        </label>
                        <input 
                        className={css(styles.InputContainer)}
                            type="date" 
                            placeholder="Birthday" 
                            name="birthday"
                            {...register("birthday", {})} />
                    </div>
                    <div className={css(styles.SelectContainer)}>
                        <label 
                            className={css(styles.LabelText)}
                            htmlFor="grade"
                        >
                            Grade
                        </label>
                        <select 
                            className={css(styles.SelectDropDown)}
                            {...register("grade")}>
                            <option value="kindergarten">Kindergarten</option>
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>s
                        </select>
                    </div>
                </div>
                <FullExperience />
            </form>
        </div>
    )
}

export default function CreateChildAccount() {

    const { childCount } = useContext(SignUpContext);
    console.log(childCount);
    const children = new Array(childCount)
    return (
        <>
            <ProgressTracker />
            <div className={css(styles.MainContainer)}>
                {Array.from(Array(childCount)).map((child, index) => <Form key={index} index={index} />)}
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        fontSize: '22px',
        width: '60em',  
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        fontFamily: 'Asap, sans-serif',
    },
    Form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '1em',
        paddingBottom: '5px'
    },
    HeadderText: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    Form: {
        display: 'flex',
        flexDirection: 'column',
    },
    ChildFormContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: '1em'
    },
    InputContainer: {
        fontSize: '18px',
        height: '35px',
        // width: '45%',
        marginTop: 'auto',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    InputError: {

    },
    SelectContainer: {
        display: "flex", 
        flexDirection: 'column',
        justifyContent: 'center',
    },
    LabelText: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Asap, sans-serif',
        alignSelf: 'center',
    },
    SelectDropDown: {
        background:'#faeaa7',
        width: '8em',
        height: '35px',
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
})
