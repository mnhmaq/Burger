import React from 'react';

import sytles from './BuildControl.css';
const buildControl = (props) => {
    return (
        <div className={sytles.BuildControl}>
            <div className={sytles.Label}>{props.label}</div>
            <button onClick={() => props.addHandler(props.type)} className={sytles.More}>Add</button>
            <p>{props.presentCount}</p>
            <button onClick={() => props.removeHandler(props.type)} className={sytles.Less}>Remove</button>
        </div>
    );
} 

export default buildControl;