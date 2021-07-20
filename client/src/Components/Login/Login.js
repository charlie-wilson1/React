import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, css} from 'aphrodite';

import { MainContext } from '../../Contexts/MainContext';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn } = useContext(MainContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        console.log('user: ', userName, 'password: ', password);
    }
    return (
        // <div className={css(styles.MainContainer)}>
            <form onSubmit={handleSubmit} className={css(styles.MainContainer)}>
                <input 
                    className={css(styles.InputBox)}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    className={css(styles.InputBox)}
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className={css(styles.Button)}  
                    type="submit"
                    value="Login"
                />    
            </form>
        //     {/* <div className={css(styles.Button)}>
        //         <div className={css(styles.ButtonText)}>Login</div>
        //     </div> */}
        // // </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    InputBox: {
        height: '30px',
        fontSize: '18px',
        fontFamily: 'Asap, sans-serif',
        borderRadius: '5px',
        marginLeft: '5px'
    },
    Button: {
        display: 'flex',
        border: '1px solid',
        borderRadius: '5px',
        alignItems: 'center',
        height: '32px',
        margin: '10px',
        backgroundColor: '#F5F5DC',
        fontFamily: 'Asap, sans-serif',
        fontSize: '16px',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: '#000000',
            color: 'white'
        }
    },
})
