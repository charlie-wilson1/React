import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';

import {SignUpContext} from './Container/SignUpContainer';


const menu = [
    {
        label: 'Monthly',
        discount: null
    },
    {
        label: 'Yearly',
        discount: 'Save 33%'
    }
];

const Option = ({lable, discount, planSelected, setPlanSelected }) => {
    const className = css(planSelected === lable ? styles.ItemConatinerSelected : styles.ItemConatiner);

    const handleClick = () => {
        setPlanSelected(lable);
    }
    return (
        <>
            <div className={className} onClick={() => handleClick()}>
                <div style={{marginBottom: 'auto', marginTop: 'auto', alignSelf: 'center'}}>
                    <div className={css(styles.OptionLabel)}>{lable}</div>
                    {discount && <div className={css(styles.Discount)}>{discount}</div>} 
                </div>
            </div>
        </>
    )
}

export default function ChoosePlan() {

    // const [whatsSelected, setWhatsSelected] = useState('');
    const { planSelected, setPlanSelected } = useContext(SignUpContext);

    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.MainText)}>Choose Plan</div>
            <div className={css(styles.OptionContainer)}>
                {menu.map((item, ind) => {
                    return <Option 
                                key={ind} 
                                lable={item.label} 
                                discount={item.discount} 
                                planSelected={planSelected} 
                                setPlanSelected={setPlanSelected} 
                            />
                })}
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
        width: '300px',
        height: '120px',
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
    },
    MainText: {
        fontSize: '22x',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: '8px',
    },
    OptionContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: 'auto',
        marginTop: 'auto',
    },
    ItemConatiner: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#e3e2de',
        height: '50px',
        width: '95px',
        paddingBottom: 'auto',
        paddingTop: 'auto',
        ':hover': {
            cursor: 'pointer',
        }
    },
    ItemConatinerSelected: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#a7faa8',
        height: '50px',
        width: '95px',
        paddingBottom: 'auto',
        paddingTop: 'auto',
        ':hover': {
            cursor: 'pointer',
        }
    },
    OptionLabel: {
        alignSelf: 'center',
    },
    Discount: {
        fontSize: '16px',
        alignSelf: 'center',
        color: 'blue'
    }
})