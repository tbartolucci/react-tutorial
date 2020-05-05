import React from 'react';
import ValidationComponent from '../ValidationComponent/ValidationComponent';


const cockpit = (props) => {

    return (
    <div>
    <h1>React App</h1>
        <p className={props.assignedClasses.join(' ')}>This is really working!</p>
        <h2>Assignment</h2>
        <p><input
            type="text"
            onChange={props.textLengthHandler}
            value={props.textLengthString}
            placeholder="How long is this?"
        />
        </p>
        <p>Count: {props.textLength}</p>
        <ValidationComponent
            length={props.textLength}
        />

        {props.charList}

        <h2>Lists and Handlers</h2>
        <p>{props.otherState}</p>
        <button
            className={props.buttonClass}
            onClick={props.togglePersonHandler}>
            Toggle People
        </button>
        </div>);
};

export default cockpit;