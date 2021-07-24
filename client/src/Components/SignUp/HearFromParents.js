import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function HearFromParents() {
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.HeadderContainer)}>
                <div className={css(styles.HeadderText)}>Hear From Other Parents:</div>
            </div>
            <div className={css(styles.BodyContainer)}>
                <div className={css(styles.QuoteContainer)}>
                    <div className={css(styles.QuoteText)}>"The great thing about Learnatric is how advanced it is... The biggest problem with other programs is they are not personalized."</div>
                    <li className={css(styles.Parent)}>John, father of 8, 11 and 12 year olds</li>
                </div>
                <div className={css(styles.QuoteContainer)}>
                    <div className={css(styles.QuoteText)}>"Repetition in educational technology may be useful, but it can be a waste of time if the student is ready to move on and the program forces you to spend a certain amount of time on a lesson."</div>
                    <li className={css(styles.Parent)}>Rudy, father of 11 year old</li>
                </div>
                <div className={css(styles.QuoteContainer)}>
                    <div className={css(styles.QuoteText)}>"Offering personalized learning cadence to each kid's learning capacity is absolutely a great idea."</div>
                    <li className={css(styles.Parent)}>Vincent, father of 2 year old</li>
                </div>
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
        fontFamily: 'Asap, sans-serif',
        width: '100%',
        height: '100%'
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
    HeadderContainer: {
        display: 'flex',
        borderBottom: '1px solid',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        justifyContent: 'center'
    },
    HeadderText: {
        fontSize: '30px',
        fontWeight: 'bold',
    },
    BodyContainer: {

    },
    QuoteContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize:'20px',
    },
    QuoteText: {
        fontWeight: 'bold',
    },
    Parent: {
        marginLeft: 'auto',
    }
})
