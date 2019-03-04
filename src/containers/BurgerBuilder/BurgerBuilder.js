import React, { Component } from 'react';

import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const Ingredient_Prices = {
    salad: 0.7,
    cheese: 0.4,
    meat: 1.7,
    bacon: 0.9
}

class burgerbuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngedients = {
            ...this.state.ingredients
        }
        updatedIngedients[type] = updatedCount;

        const oldprice = this.state.totalPrice;
        const priceadd = Ingredient_Prices[type];
        const updatedPrice = oldprice + priceadd;

        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngedients });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngedients = {
            ...this.state.ingredients
        }
        updatedIngedients[type] = updatedCount;

        const oldprice = this.state.totalPrice;
        const pricededeuct = Ingredient_Prices[type];
        const updatedPrice = oldprice - pricededeuct;

        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngedients });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxilary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addedIngredient={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </Auxilary>
        );
    }
}

export default burgerbuilder;