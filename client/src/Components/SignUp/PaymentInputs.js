import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import Globe from '../Common/Images/Globe.png'
import {SignUpContext} from './Container/SignUpContainer';

export default function PaymentInputs() {
    const { childCount, planSelected, allPaymentFormValues, setAllPaymentFormValues, price, setPrice } = useContext(SignUpContext);
    // const [price, setPrice] = useState(29);
    const {
        meta,
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getZIPProps
    } = usePaymentInputs();

    useEffect(() => {
        console.log('forVals: ', wrapperProps)
    }, [allPaymentFormValues])
    useEffect(() => {
        if (planSelected === 'Monthly') {
            if (childCount > 1) {
                let minusOneCount = childCount - 1;
                let addionalKidsPrice = (minusOneCount * 24) + 29
                setPrice(addionalKidsPrice)
            } else {
                setPrice(29)
            }
        } else {
            let yearPrice = 290 * childCount;
            setPrice(yearPrice)
        }
    }, [childCount, planSelected]);

    const handleChange = (e) => {
        
        setAllPaymentFormValues({...allPaymentFormValues, [e.target.name]: [e.target.value]})
    }
    return (
        <div className={css(styles.MainContainer)}> 
            <div className={css(styles.FormFieldContainer)}>
                <div className={css(styles.EnterPaymentHeadder)}>
                    <div className={css(styles.PaymentHeadderText)}>Enter Payment Information</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', width: '95%', justifyContent: 'center', }}>
                    <div className={css(styles.DynamicTextAndPriceContainer)}>
                        <div className={css(styles.DynammicText)}>{planSelected} Membership for:</div>
                        <div style={{marginLeft:'4em', marginTop:'.5em'}}> {childCount}    {childCount > 1 ? 'Children' : 'Child'}</div>
                        <div className={css(styles.DynammicPrice)}>${price}.00 <p style={{fontSize: '18px'}}>  + tax</p></div>
                    </div>
                </div>
                <div >
                    <input 
                        className={css(styles.InputContainer)}
                        name="holder_name"
                        type="text"
                        placeholder="Card Holder Name"
                        // value={cardHolderName}
                        onChange={e => handleChange(e)} 
                    />
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '.5em'}}>
                        <PaymentInputsWrapper {...wrapperProps}>
                            <svg {...getCardImageProps({ images })} />
                            <input name="card_number"{...getCardNumberProps({ onChange: handleChange})} />
                            <input name="expire" {...getExpiryDateProps({ onChange: handleChange})} />
                            <input name="cvc" {...getCVCProps({ onChange: handleChange})} />
                            <input {...getZIPProps({ onChange: handleChange })} />

                        </PaymentInputsWrapper>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', }}>
                        <input className={css(styles.SubmitButton)} type="submit" value="Join"/>
                        <div className={css(styles.TermsText)}>By clicking Join below, you agree to our Terms and Conditoins and Privacy Policy</div>
                    </div>
                </div>
            </div>
            <div className={css(styles.StaticContainer)}>
                <div className={css(styles.ImageContainer)}>
                    <img src={Globe} />
                </div>
                
                <div className={css(styles.StaticTextContainer)}>
                    <div style={{marginLeft:'3px', fontWeight:'bold'}}>Our Guarantee:</div>
                    <div style={{marginLeft:'3px', fontSize: '15px'}}>If you're not satisfied within 30 days, we'll gladly provide a refund.</div>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    },
    EnterPaymentHeadder: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    PaymentHeadderText: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    DynamicTextAndPriceContainer: {
        marginTop: '.5em'
    },
    DynammicText: {
        fontWeight: 'bold'
    },
    DynammicPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '26px',
        fontWeight: 'bold',
        marginLeft: '2em'
    },
    InputContainer: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
        height: '35px',
        width: '50%',
        marginTop: '.5em'
    },
    FormFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },
    SubmitButton: {
        fontSize: '22px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '5px',
        width: '498px',
        alignSelf: 'center',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#4280e3',
        ':hover': {
            cursor: 'pointer',
            outline: '3px solid',
            
        },
    },
    TermsText: {
        marginTop: '.5em',
        fontSize: '18px',
        alignSelf: 'center',
    },
    StaticContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid'
    },
    ImageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    StaticTextContainer: {
        marginTop: 'auto'
    },
})
