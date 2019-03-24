import React from 'react';
import classes from './Logo.css';
import BurgerLogo from '../../assets/images/133 burger-logo.png';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="My Burger" />
    </div>
);

export default Logo;