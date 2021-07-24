import React, { useState, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { SignUpContext } from './Container/SignUpContainer';


export default function ChooseChildren() {

    const { childCount, setChildCount } = useContext(SignUpContext);

    const handleClickDown = () => {
        if (childCount > 1) {
            setChildCount(childCount - 1);
        }
    }
    const handleClickUp = () => {
        setChildCount(childCount + 1);
    }
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.MainText)}>Choose Number of Children</div>
            <div className={css(styles.ButonCountContainer)}>
                <div className={css(styles.ButtonContainer)} onClick={() => handleClickDown()}>
                    <div className={css(styles.ContainerText)}>-</div>
                </div>
                <div className={css(styles.CountContainer)}>
                    <div className={css(styles.ContainerText)}>{childCount}</div>
                </div>
                <div className={css(styles.ButtonContainer)} onClick={() => handleClickUp()}>
                    <div className={css(styles.ContainerText)}>+</div>
                </div>
            </div>
            <div className={css(styles.SubText)}>Each Additional Child is $24.00</div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
        width: '300px',
        height: '150px',
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
        alignItems: 'space-around',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    },
    MainText: {
        fontSize: '22x',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: '8px',
    },
    ButonCountContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 'auto', 
        marginBottom: 'auto',
    },
    ButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        width: '50px',
        height: '40px',
        backgroundColor: '#e3e2de',
        margin: '3px',
        borderRadius: '10px',
        ':hover' : {
            cursor: 'pointer',
        }
    },
    CountContainer: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        width: '50px',
        height: '40px',
        backgroundColor: '#e3e2de',
        margin: '3px',
        borderRadius: '10px',
    },
    ContainerText: {
        marginBottom: 'auto',
        marginTop: 'auto'
    },
    SubText: {
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: '3px'
    }
})
