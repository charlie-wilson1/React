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
                    <li>Curated Lessons</li>
                    <li>"We do" Activities</li>
                    <li>Curated Problems</li>
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
    },
    NeedsContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '285px',
        border: '1px solid',
        borderRadius: '5px'
    },
    ListContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '285px',
        border: '1px solid',
        borderRadius: '5px'
    },
    ListItem: {
        
    },
    ImageContainer: {

    }
})
