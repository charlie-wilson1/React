import React, { useContext } from 'react';
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { StyleSheet, css } from 'aphrodite';

import logo from './Images/LearnAtric.png';
import Login from '../Login/Login';
import { MainContext } from '../../Contexts/MainContext';


export default function NavBar() {

    const history = useHistory();
    const { isLoggedIn, setIsLoggedIn } = useContext(MainContext);

    let buttonText = !isLoggedIn ? 'Login' : 'Logout'
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.LogoContainer)} >
                <img src={logo} onClick={() => history.push('/')}/>
            </div>
            <div className={css(styles.SloganContainer)}>
                <div className={css(styles.SloganText)} style={{fontWeight: 'bold', fontSize: '20px'}}>Learnatric</div>
                <div className={css(styles.SloganText)}>...becasue everyone learns differently</div>
            </div>
            <div className={css(styles.ButtonContainer)}>
                {!isLoggedIn ? 
                <>
                {/* <input placeholder="Username" />
                <input placeholder="Password"/>
                <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                    <div className={css(styles.Button)}>
                        <div className={css(styles.ButtonText)}>{buttonText}</div>
                    </div>
                </Link> */}
                <Login />
                <Link to="signup" style={{textDecoration: 'none', color: 'black'}}>
                    <div className={css(styles.Button)}>
                        <div className={css(styles.ButtonText)}>Sign Up</div>
                    </div>
                </Link>
                </>
                :
                <div className={css(styles.Button)} onClick={() => {
                    setIsLoggedIn(false);
                    history.push('/')
                    }}>
                    <div className={css(styles.ButtonText)}>{buttonText}</div>
                </div>
            }
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
        marginLeft: '2em',
        ':hover': {
            cursor: 'pointer'
        }
    },
    SloganContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        marginLeft: '1em'
    },
    SloganText: {
        fontFamily: 'Asap, sans-serif',
        width: 'fit-content',
        alignSelf: 'center',
        textOverflow: 'hidden',
        color: '#1c3380'

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
        borderRadius: '5px',
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
        fontFamily: 'Asap, sans-serif',
    }
})
