import React from 'react';
import { Link } from "react-router-dom";

import { StyleSheet, css } from 'aphrodite';

import logo from './Images/LearnAtric.png';

export default function NavBar() {
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.LogoContainer)}>
                <img src={logo} />
            </div>
            <div className={css(styles.ButtonContainer)}>
                <Link to="/login">
                    <div className={css(styles.Button)}>
                        <div className={css(styles.ButtonText)}>Login</div>
                    </div>
                </Link>
                <Link to="signup">
                    <div className={css(styles.Button)}>
                        <div className={css(styles.ButtonText)}>Sign Up</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        height: '80px',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fcad03'
    },
    LogoContainer: {
        marginLeft: '2em'
    },
    ButtonContainer: {
        marginLeft: 'auto',
        marginRight: '4em',
        display: 'flex',
        flexDirection: 'row'
    },
    Button: {
        display: 'flex',
        border: '1px solid',
        borderRadius: '4px',
        alignItems: 'center',
        height: '30px',
        margin: '10px',
        backgroundColor: '#F5F5DC',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: '#000000',
            color: 'white'
        }
    },
    ButtonText: { 
        padding: '7px',
    }
})
