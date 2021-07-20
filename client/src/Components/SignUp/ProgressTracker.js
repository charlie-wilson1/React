import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function ProgressTracker() {
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.StepContainer)}>
                <div className={css(styles.StepText)}>1. Become a Member</div>
            </div>
            <div className={css(styles.StepContainer)}>
                <div className={css(styles.StepText)}>2. Setup Your Account</div>
            </div>
        </div>
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
        marginTop: '5px'
    },
    StepContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    StepText: {
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',

    }
})