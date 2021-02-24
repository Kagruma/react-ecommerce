import React from 'react';
import NavItems from '../Navigation/NavItems/NavItems';
import classes from './SideDrawer.module.css'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

const Drawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Auxiliary>
        <div className = {attachedClasses.join(' ')}>
            
            <nav>
                <NavItems/>
            </nav>
        </div>
        </Auxiliary>
    );
}
;

export default Drawer;