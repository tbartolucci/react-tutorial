import React from 'react';
import styles from  './ValidationComponent.css';

const validationComponent = (props) => {
    let style = styles.InvalidText;
    let message = 'Too Short';
    if( props.length > 5 ){
        message = 'Too Long';
        style = styles.ValidText;
    }
    return (
        <div className={style}>{message}</div>
    );
};

export default validationComponent;