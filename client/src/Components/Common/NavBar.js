import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import logo from './Images/LearnAtric.png';

export default function NavBar() {
    return (
        <div className={css(styles.MainContainer)}>
            <img src={logo} />
            <div className={css(styles.LoginButton)}>
                <div className={css(styles.ButtonText)}></div>
            </div>
            <div className={css(styles.SignUpButton)}>
                <div className={css(styles.ButtonText)}></div>
            </div>

        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    LoginButton: {
        border: '1px solid',
        borderRadius: '1px'
    },
    SignUpButton: { 
        border: '1px solid',
        borderRadius: '1px'
    },
    ButtonText: { 

    }
})
