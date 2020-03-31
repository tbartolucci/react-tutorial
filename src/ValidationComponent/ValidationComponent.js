import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    let style = 'InvalidText';
    let message = 'Too Short';
    if( props.length > 5 ){
        message = 'Too Long';
        style = 'ValidText';
    }
    return (
        <div className={style}>{message}</div>
    );
};

export default validationComponent;