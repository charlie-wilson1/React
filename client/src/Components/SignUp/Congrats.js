import React, {useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';

import backGroundRobot from '../Common/Images/backGroundRobot.png';

import ProgressTracker from './ProgressTracker';
import { SignUpContext } from './Container/SignUpContainer';

export default function Congrats() {

    const { stepInProcess, setStepInProcess } = useContext(SignUpContext);

    const handleClick = () => {
        setStepInProcess({...stepInProcess, congrats: false, setChildAccount: true})
    }
    return (
        <div style={{ 
            backgroundImage: `url(${backGroundRobot})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '93vh',
        }}>
                <ProgressTracker />
                <div className={css(styles.MainContainer)}>
                    <div className={css(styles.MemberContainer)}>
                        <div className={css(styles.MemberText)}>Your are now an official member of Learnatric!</div>
                        <div className={css(styles.MemberText)} style={{marginBottom: '1em'}}>We just emailed you your receipt!</div>
                    </div>
                    <div 
                        className={css(styles.Button)}
                        onClick={() => handleClick()}
                    >
                        <div className={css(styles.ButtonText)}>
                            NEXT
                        </div>
                    </div>
                </div>
            </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    MemberContainer: {
        marginTop: '.5em',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '40em',
        background: '#FFCEAA',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
    },
    MemberText: {
        alignSelf: 'center',
        fontSize: '22px',
        fontFamily: 'Asap, sans-serif',
        fontWeight: 'bold',
        marginTop: '1em'
    },
    Button:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '4em',
        width: '498px',
        alignSelf: 'center',
        padding: '10px',
        border: '1px solid black',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        backgroundColor: '#4280e3',
        ':hover': {
            cursor: 'pointer',
            border: '1px solid white'
            
        },
    },
    ButtonText: {
        alignSelf: 'center',
    }
})