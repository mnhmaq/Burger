import React, {Fragment} from 'react';

import Button from '../UI/Button/Button'


const OrderSummary = (props) => {
    const ingredientsSummary =  Object.keys(props.ingredients)
            .map((igkey, i) => {
            return ( 
                <li key={igkey + i}>
                    <span style={{textTransform: 'Capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                </li>
            );
        });

    return (
        <Fragment>
            <h3>Order Summary</h3>
            <p>Review your Order:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" click={props.continueHandler}>
                Continue
            </Button>
            <Button btnType="Danger" click={props.cancelHandler}>
                Cancel
            </Button>
        </Fragment>
    )

}

export default OrderSummary;