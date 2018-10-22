import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildContols from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        totalPrice: 2,
        purchaseable: false,
        readyToCheckout: false
    };

    purchaseHandler = () => {
        this.setState({
            readyToCheckout: true
        });
    }

    cancelPurchaseHandler = () => {
        this.setState({
            readyToCheckout: false
        });
    }

    continuePurchaseHandler = () => {
        alert('Continue Purchasing');
    }

    updatePurchaseState = (ingredients) => {
        const totalIngredients = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey]
            }).reduce((sum, el) => {
                return sum + el;
            });
        console.log(totalIngredients);

        this.setState({
            purchaseable: totalIngredients > 0
        });
    }

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
        this.updatePurchaseState(updatedIngredients);

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
        this.updatePurchaseState(updatedIngredients);
    };

    render () {
        const disableInfo = {
            ...this.state.ingredients
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildContols 
                    ingredients={this.state.ingredients} 
                    addHandler={this.addIngredientHandler} 
                    removeHandler={this.removeIngredientHandler} 
                    totalPrice={this.state.totalPrice} 
                    purchaseable={this.state.purchaseable} 
                    checkoutHandler={this.purchaseHandler}
                    disableInfo = {disableInfo}
                />
                <Modal show={this.state.readyToCheckout} backDropHandler={this.cancelPurchaseHandler}>
                    <OrderSummary 
                      ingredients={this.state.ingredients}
                      cancelHandler={this.cancelPurchaseHandler}
                      continueHandler={this.continuePurchaseHandler}
                      price={this.state.totalPrice}
                    />
                </Modal>
            </Fragment>
        )
    }
}

export default BurgerBuilder;