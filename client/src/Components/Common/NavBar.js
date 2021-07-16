import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import logo from './Images/LearnAtric.png';

export default function NavBar() {
    return (
        <header className={css(styles.MainContainer)}>
            <img src={logo} />
            <div className={css(styles.Button)}>
                <div className={css(styles.ButtonText)}>Login</div>
            </div>
            <div className={css(styles.Button)}>
                <div className={css(styles.ButtonText)}>Sign Up</div>
            </div>

        </header>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: '#fcad03'
    },
    LogoContainer: {

    },
    Button: {
        display: 'flex',
        border: '1px solid',
        borderRadius: '4px',
        alignItems: 'center',
        height: '30px',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: 'blue'
        }
    },
    ButtonText: { 
        padding: '7px'
    }
})
