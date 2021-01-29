import React from 'react';
import classes from './Toolbar.module.css';
// import Logo from '../../Logo/Logo';
import NavItems from '../Navigation/NavItems/NavItems';
import Toggle from '../Drawer/Toggle/Toggle'
import { Link } from 'react-router-dom';



const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Toggle clicked={props.ToggleClicked} />
        {/* <div className = {classes.Logo}>
            <Logo/>
        </div> */}

        <nav className={classes.Desktop}>
            <Link exact to = '/'>
                <img
                    className={classes.Logo}
                    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/515/3867915515_31e4c417-026a-4d15-8a8b-3031b5604280.png?cb=1602002614"
                    alt="logo"
                />
            </Link>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;