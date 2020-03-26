import React from 'react';
import './UserInput.css';

const userInput = ( props ) => {
    return (
        <div>
            <p>Username</p>
            <p><input
                className="UserInput"
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