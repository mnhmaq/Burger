import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import styles from './Burger.css';
const burger = (props) => {

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey])].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce(
            (array, elem) => array.concat(elem),
            []
        );
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Customize your Burger</p>;
    }
    return (
        <div className={styles.burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};


export default burger;