import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import silhouette from '../Common/Images/silhouettes1.png'

export default function StaticContent1() {
    return (
        <div className={css(styles.MainContainer)}>
            <div className={css(styles.NeedsContainer)}>
                <div>Fit for Your Child's Needs!</div>
            </div>
            <div className={css(styles.ListContainer)}>
                <div className={css(styles.List)}>
                    <li className={css(styles.ListItem)}>Curated Lessons</li>
                    <li className={css(styles.ListItem)}>"We do" Activities</li>
                    <li className={css(styles.ListItem)}>Curated Problems</li>
                </div>
            </div>
            <div className={css(styles.ImageContainer)}>
                <img src={silhouette} />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '20px',
    },
    NeedsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
        height: '40px',
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '2px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    },
    ListContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '300px',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#faeaa7',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
    ListItem: {
        textAlign: 'center',
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',
        
    },
    ImageContainer: {
        marginTop: '20px'
    }
})
