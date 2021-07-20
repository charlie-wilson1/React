import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, css} from 'aphrodite';

import { MainContext } from '../../Contexts/MainContext';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const { setIsLoggedIn, setIsLoginError, isLoginError} = useContext(MainContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        axios.post('/login', {user_name: userName, password: password})
        .then((response) => {
            console.log(response);
            if (response.data.resp === 'NOT FOUND') {
                setIsLoginError(true);
            } else {
                if (isLoginError) {
                    setIsLoginError(false);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(true);
                }
            }
        })
        .catch((error) => {
            console.log(error)
            // setIsLoginError(true);
        })
        console.log('user: ', userName, 'password: ', password);
    }
    return (
        <div className={css(styles.Invalid)}>
            {/* {isLoginError && <p className={css(styles.InvalidText)}>Invalid Username or Password</p>} */}
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
        </div>       
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Invalid: {
        display: 'flex',
        flexDirection: 'column',
    },
    InvalidText: {
        color: 'red',
        top: 0,
    },
    InputBox: {
        height: '30px',
        fontSize: '18px',
        fontFamily: 'Asap, sans-serif',
        borderRadius: '5px',
        marginLeft: '5px'
    },
    InputBoxError: {
        height: '30px',
        fontSize: '14px',
        fontFamily: 'Asap, sans-serif',
        borderRadius: '5px',
        marginLeft: '5px',
        color: 'red'
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
