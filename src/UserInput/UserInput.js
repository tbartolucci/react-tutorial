import React from 'react';
import styles from  './UserInput.css';

const userInput = ( props ) => {
    return (
        <div>
            <p>Username</p>
            <p><input
                className={styles.UserInput}
                type="text"
                onChange={props.changed}
                value={props.username}
                placeholder="Username"
            />
            </p>
        </div>
    );
};

export default userInput;