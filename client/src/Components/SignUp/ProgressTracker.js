import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { SignUpContext } from './Container/SignUpContainer';

export default function ProgressTracker() {

    const { stepInProcess, setStepInProcess } = useContext(SignUpContext);
    return (
        <>
        
        {stepInProcess.becomeAmember &&
            <div className={css(styles.MainContainer)}>
                <div className={css(styles.StepContainer)}>
                    <div className={css(styles.SelectedStepText)}>1. Become a Member</div>
                </div>
                <div className={css(styles.StepContainer)}>
                    <div className={css(styles.StepText)}>2. Setup Your Account</div>
                </div>
            </div>}
        {stepInProcess.congrats &&
            <div className={css(styles.CongratsContainer)}>
                <div className={css(styles.SelectedStepText)}>Congratulations!</div>
            </div>}
        </>
    )
}


const styles = StyleSheet.create({
    MainContainer: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        height: '80px',
        width: '100%',
        backgroundColor: '#e3e2de',
        borderRadius: '20px',
        marginTop: '5px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    StepContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    StepText: {
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
    },
    SelectedStepText: {
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
    },
    CongratsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        width: '100%',
        borderRadius: '20px',
        backgroundColor: '#e3e2de',
        marginTop: '5px',
    },
})