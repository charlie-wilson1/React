import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useForm } from 'react-hook-form';

import ProgressTracker from '../ProgressTracker';
import { SignUpContext } from '../Container/SignUpContainer';

import FullExperience from './FullExperience';

const Form = ({index, setChildFormNumber, childFormNumber, childCount, setStepInProcess, stepInProcess }) => {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setChildFormNumber(childFormNumber + 1);
        if (childFormNumber === childCount) {
            setStepInProcess({...stepInProcess, setChildAccount: false, createStudentProfile: true});
        }
    }

    
    return (
        <div className={css(styles.Form)}>
            <div className={css(styles.HeadderText)}>Create Student {index === 0 ? '' : index+1+"'s"} Account</div>
            <form className={css(styles.FormContainer)} onSubmit={handleSubmit(onSubmit)}>
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
                            <option value="Male">Male</option> 
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
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
                            <option value="third">Third</option>
                        </select>
                    </div>
                </div>
                <FullExperience />
                <input className={css(styles.SubmitButton)} type="submit" value="Join"/>
            </form>
        </div>
    )
}

export default function CreateChildAccount() {

    const { childCount, setStepInProcess, stepInProcess } = useContext(SignUpContext);
    const [childFormNumber, setChildFormNumber] = useState(0);


const children = Array.from(Array(childCount)).map((child, index) => <Form key={index} index={index} setChildFormNumber={setChildFormNumber} childFormNumber={childFormNumber} childCount={childCount} stepInProcess={stepInProcess} setStepInProcess={setStepInProcess}/>);

    return (
        <>
            <ProgressTracker />
            <div className={css(styles.MainContainer)}>
                {childFormNumber <= childCount ? children[childFormNumber] : ''}
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
        marginTop: 'auto',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    InputError: {
        fontSize: '18px',
        height: '35px',
        '::placeholder': {
            color: 'red',
        },
        marginTop: 'auto',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
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
    SubmitButton: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '5px',
        width: '498px',
        alignSelf: 'center',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#4280e3',
        ':hover': {
            cursor: 'pointer',
            outline: '3px solid',
        },
    },
})
