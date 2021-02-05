import React from 'react';
import NavItems from '../Navigation/NavItems/NavItems';
import classes from './SideDrawer.module.css'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const Drawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Auxiliary>
        <Backdrop show= {props.open} clicked ={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <nav>
                <NavItems/>
            </nav>
        </div>
        </Auxiliary>
    );
}
;

export default Drawer;