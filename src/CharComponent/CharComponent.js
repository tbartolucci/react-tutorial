import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div onClick={props.click} className='CharComponent'>
            <p>{props.text}</p>
        </div>
    );
};

export default charComponent;