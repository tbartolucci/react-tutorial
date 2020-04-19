import React from 'react';
import classes from './CharComponent.css';

const charComponent = (props) => {
    return (
        <div onClick={props.click} className={classes.CharComponent}>
            <p>{props.text}</p>
        </div>
    );
};

export default charComponent;