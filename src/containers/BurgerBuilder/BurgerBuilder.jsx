import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildContols from '../../components/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
    salad: 0.25,
    meat: 2,
    cheese: 0.5,
    beef: 1.25
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
            beef: 0
        },
        totalPrice: 2
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    };

    render () {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>{this.state.totalPrice}</div>
                <BuildContols ingredients={this.state.ingredients} addHandler={this.addIngredientHandler} removeHandler={this.removeIngredientHandler} />
            </Fragment>
        )
    }
}

export default BurgerBuilder;