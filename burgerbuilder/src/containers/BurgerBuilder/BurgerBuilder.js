import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    addIngredientController = (type) => {
        const oldType = this.state.ingredient[type];
        const updatedCount = oldType + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedprice = oldPrice + priceAddition;
        this.setState({
            ingredient: updatedIngredient,
            totalPrice: updatedprice
        });
    };
    removeIngredientController = (type) => {
        const oldType = this.state.ingredient[type];
        const updatedCount = oldType - 1;
        if (updatedCount >= 0) {
            const updatedIngredient = {
                ...this.state.ingredient
            };
            updatedIngredient[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const updatedprice = oldPrice - priceAddition;
            this.setState({
                ingredient: updatedIngredient,
                totalPrice: updatedprice
            });
        }
    };

    updatePurchaseState = () => {
        const ingredients = { ...this.state.ingredient };
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((temp, el) => {
                return temp + el;
            }, 0);
        this.setState({
            purchaseable: sum > 0
        })
    };

    render() {
        const disableInfo = { ...this.state.ingredient };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredient} />
                <BurgerControls
                    ingredientAdded={this.addIngredientController}
                    ingredientRemoved={this.removeIngredientController}
                    disabled={disableInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;