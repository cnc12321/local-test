import React from 'react';
import classes from './BuildControls.css';
import BurgerControl from './BuildControl/BuildControl';

const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BurgerControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    ingredientAdded={props.ingredientAdded}
                    ingredientRemoved={props.ingredientRemoved}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button
                className={classes.OrderButton}
                disabled={props.purchaseable}>Checkout</button>
        </div>
    );
}

export default buildControls;