import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import { useForm } from 'react-hook-form';
import Checkbox from "react-custom-checkbox";

import { FcCheckmark } from 'react-icons/fc'


const bodyText = 'Our curriculum is based on the US Federal Core Standards and was created from scratch by a team of committed teachers. We would love to continue our strong alignment with teachers by keeping your child’s teacher notified of your child’s progress.';
const checkBoxText = "I am okay with Learnatric emailing my child’s teacher periodically about academic progress.";


export default function FullExperience({register, childData, setChildData}) {

    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.Header)}>
                <div className={css(styles.HeaderText)}>Get the Full Experience (optional):</div>
            </div>
            <div className={css(styles.StaticAndFormContainer)}>
                <div className={css(styles.StaticContainer)}>
                    <div className={css(styles.StaticHeader)}>
                        <div className={css(styles.StaticHeaderText)}>Why Your Teacher’s    Information?</div>
                    </div>
                    <div className={css(styles.StaticBody)}>
                        <div className={css(styles.StaticBodyText)}>{bodyText}</div>
                    </div>
                </div>
                <div className={css(styles.FormContainer)}>
                    <div className={css(styles.SideBySideContainer)}>
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="School District " 
                            {...register("schoolDistrict", {})} />
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="School" 
                            {...register("school", {})} />
                    </div>
                    <div className={css(styles.SideBySideContainer)}>
                        <input 
                            className={css(styles.InputContainer)}
                            type="text" 
                            placeholder="Teachers name" 
                            {...register("teachersName", {})} />
                        <input 
                            className={css(styles.InputContainer)}
                            type="email" 
                            placeholder="Teachers email" 
                            {...register("teachersEmail", {})} />
                    </div>
                    <div className={css(styles.CheckboxContainer)}>
                        <Checkbox 
                            checked={childData.isOkayToEmailTeacher}
                            icon={<FcCheckmark size={50}/>}
                            name="my-input"
                            onChange={(e) => setChildData({...childData, isOkayToEmailTeacher: false})}
                            borderRadius={50}
                            borderColor={'black'}
                            borderWidth={3}
                            className={css(styles.CheckBox)}
                            size={30}
                            label={checkBoxText}
                            labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: '18px' }}
                        />
                    </div>
                    <input className={css(styles.SubmitButton)} type="submit" value="Next"/>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        width: '95%',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        fontFamily: 'Asap, sans-serif',
    },
    Header: {

    },
    HeaderText: {
        fontSize: '26px',
        fontWeight: 'bold',
    },
    StaticAndFormContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '.4em'
    },
    StaticContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
    },
    StaticHeader: {
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid',
        fontWeight: 'bold',
        width: '100%',
        alignSelf: 'center',
    },
    StaticHeaderText: {

    },
    StaticBody: {
        width: '95%',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
    },
    StaticBodyText: {

    },
    FormContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginLeft: '3em',
        
    },
    SideBySideContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '75%', 
        marginTop: '1em',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    InputContainer: {
        fontSize: '18px',
        height: '35px',
        width: '45%',
        marginTop: 'auto',
        borderRadius: '10px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    CheckboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1em',
    },
    CheckBox: {
        cursor: 'pointer',
        backgroundColor: '#faeaa7',
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
