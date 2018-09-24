import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Beef', type: 'beef'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {controls.map( (ctrl, i) => {
                return <BuildControl key={ctrl + i} type={ctrl.type} label={ctrl.label} addHandler={props.addHandler} removeHandler={props.removeHandler} presentCount={props.ingredients[ctrl.type]} />
            })}
        </div>
    );
} 

export default BuildControls;