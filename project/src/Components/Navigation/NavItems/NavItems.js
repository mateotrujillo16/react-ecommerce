import React from 'react';
import classes from './NavItems.module.css'
import NavItem from './NavItem/Navitem'

const NavItems = () =>(
    <ul className = {classes.NavItems}>
        <NavItem link = '/' exact>Home</NavItem>
        <NavItem link = '/Products' exact>Products</NavItem>
        <NavItem link = '/Checkout' exact>Checkout</NavItem>
        <NavItem link = '/Contact' exact>Contact</NavItem>
    </ul>
);

export default NavItems;