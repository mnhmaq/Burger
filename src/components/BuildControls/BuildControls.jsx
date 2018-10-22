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
        <div className={styles.BuildControl}>
            <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map( (ctrl, i) => {
                return <BuildControl 
                            key={ctrl + i} 
                            type={ctrl.type} 
                            label={ctrl.label} 
                            addHandler={props.addHandler} 
                            removeHandler={props.removeHandler} 
                            presentCount={props.ingredients[ctrl.type]}
                            disabled={props.disableInfo[ctrl.type]}
                        />
            })}
            <button 
              className={styles.OrderButton}
              disabled={!props.purchaseable}
              onClick={props.checkoutHandler}>
                proceed to checkout
            </button>
        </div>
    );
} 

export default BuildControls;