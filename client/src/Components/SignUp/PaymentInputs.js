import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export default function PaymentInputs() {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();
    console.log('meta: ', meta);

    const [cardNumber, setCardNumber] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [cvc, setCVC] = useState();
    const handleChangeCardNumber = (e) => {
        console.log('setCardNumber: ', e)
    }
    const handleChangeExpiryDate = (e) => {
        console.log('setExpire: ', e)
    }
    const handleChangeCVC =(e) => {
        console.log('setCVC: ', e)
    }
    return (
        <div className={css(styles.MainContainer)}> 
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
            <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
            <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
            {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
        </div>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    }
})
