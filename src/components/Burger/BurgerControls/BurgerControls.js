import React from 'react';
import BuildControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.css';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' }
]

const buildcontrols = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => { props.addedIngredient(ctrl.type) }}
                removed={() => { props.removedIngredient(ctrl.type) }}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default buildcontrols;