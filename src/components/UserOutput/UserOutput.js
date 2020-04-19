import React from 'react';
import styles from './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className={styles.UserOutput}>
            <p>Username: {props.username}</p>
            <p>More Random TExt!</p>
        </div>
    );
};

export default userOutput;