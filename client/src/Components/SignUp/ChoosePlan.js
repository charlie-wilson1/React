import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';


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

const Option = ({lable, discount, whatsSelected, setWhatsSelected }) => {
    const className = css(whatsSelected === lable ? styles.ItemConatinerSelected : styles.ItemConatiner);

    const handleClick = () => {
        setWhatsSelected(lable);
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

    const [whatsSelected, setWhatsSelected] = useState('');

    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.MainText)}>Choose Plan</div>
            <div className={css(styles.OptionContainer)}>
                {menu.map((item, ind) => {
                    return <Option 
                                key={ind} 
                                lable={item.label} 
                                discount={item.discount} 
                                whatsSelected={whatsSelected} 
                                setWhatsSelected={setWhatsSelected} 
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
        borderRadius: '5px',
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
        borderRadius: '5px',
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
        borderRadius: '5px',
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