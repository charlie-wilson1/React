import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useForm } from 'react-hook-form';


const bodyText = 'Our curriculum is based on the US Federal Core Standards and was created from scratch by a team of committed teachers. We would love to continue our strong alignment with teachers by keeping your child’s teacher notified of your child’s progress.'

export default function FullExperience() {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.Header)}>
                <div className={css(styles.HeaderText)}>Get the Full Experience (optional):</div>
            </div>
            <div className={css(styles.StaticAndFormContainer)}>
                <div className={css(styles.StaticContainer)}>
                    <div className={css(styles.StaticHeader)}>
                        <div className={css(styles.StaticHeaderText)}>Why Your Teacher’s    Information?</div>
                    </div>
                    <div className={css(styles.StaticBody)}>
                        <div className={css(styles.StaticBodyText)}>{bodyText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column',
        fontFamily: 'Asap, sans-serif',
    },
    Header: {

    },
    HeaderText: {
        fontSize: '26px',
        fontWeight: 'bold',
    },
    StaticAndFormContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    StaticContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
    },
    StaticHeader: {
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid',
        fontWeight: 'bold',
        width: '100%',
        alignSelf: 'center',
    },
    StaticHeaderText: {

    },
    StaticBody: {
        width: '95%',
        // height: '95%',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18px',
    },
    StaticBodyText: {

    }
})
