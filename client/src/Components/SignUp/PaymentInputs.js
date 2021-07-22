import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import Globe from '../Common/Images/Globe.png'
import {SignUpContext} from './Container/SignUpContainer';

export default function PaymentInputs() {
    const { childCount, planSelected, allPaymentFormValues, setAllPaymentFormValues } = useContext(SignUpContext);
    const [price, setPrice] = useState(29);
    const {
        meta,
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getZIPProps
      } = usePaymentInputs();
    // console.log('meta: ', meta);

    useEffect(() => {
        console.log('forVals: ', allPaymentFormValues)
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
                <input 
                    className={css(styles.InputContainer)}
                    name="holder_name"
                    type="text"
                    placeholder="Card Holder Name"
                    // value={cardHolderName}
                    onChange={e => handleChange(e)} 
                />
                <PaymentInputsWrapper {...wrapperProps}>
                    <svg {...getCardImageProps({ images })} />
                    <input name="card_number"{...getCardNumberProps({ onChange: handleChange})} />
                    <input name="expire" {...getExpiryDateProps({ onChange: handleChange})} />
                    <input name="cvc" {...getCVCProps({ onChange: handleChange})} />
                    <input {...getZIPProps({ onChange: handleChange })} />

                </PaymentInputsWrapper>
                {/* <div className={css(styles.CardImageAndNumberContainer)}>
                    <svg className={css(styles.SVG)} {...getCardImageProps({ images })} />
                    <input className={css(styles.InputContainer)} {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
                </div>
                <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
                <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
                {meta.isTouched && meta.error && <span>Error: {meta.error}</span>} */}
                <div className={css(styles.TermsText)}>By clicking Join below, you agree to our Terms and Conditoins and Privacy Policy</div>
                <input type="submit"/>
            </div>
            <div className={css(styles.ImagePriceContainer)}>
                <div className={css(styles.ImageContainer)}>
                    <img src={Globe} />
                </div>
                <div className={css(styles.DynamicTextAndPriceContainer)}>
                    <div className={css(styles.DynammicText)}>{planSelected} Membership for {childCount} {childCount > 1 ? 'Children' : 'Child'}</div>
                    <div className={css(styles.DynammicPrice)}>${price}.00 +tax</div>
                </div>
                <div className={css(styles.StaticTextContainer)}>
                    <h5>Our Guarantee:</h5>
                    <p>If you're not satisfied within 30 days, we'll gladly provide a refund.</p>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        // marginLeft: '4em',
        // marginRight: '4em',
        border: '1px solid',
        borderRadius: '5px',
        backgroundColor: '#faeaa7',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
    },
    EnterPaymentHeadder: {

    },
    PaymentHeadderText: {

    },
    InputContainer: {
        fontSize: '18px',
        height: '30px',
        width: '200px',
        marginTop: '20px'
    },
    FormFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },
    CardImageAndNumberContainer: {
        display: 'flex',
        height: '30px'
        // flexDirection: 'row',
        // width: '100%'
    },
    SVG: {
        height: 'inherit'
    },
    TermsText: {

    },
    ImagePriceContainer: {

    },
    ImageContainer: {

    },
    DynamicTextAndPriceContainer: {

    },
    DynammicText: {

    },
    DynammicPrice: {

    },
    StaticTextContainer: {

    },
})
