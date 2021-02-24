import React from 'react';
import classes from './Toggle.module.css';


const Toggle = (props) => (
    <div className={classes.DrawerToggle} onClick = {props.clicked} >
        <div className="line line--1"></div>
        <div  className="line line--2"></div>
        <div className="line line--3"></div>
    </div>
);

export default Toggle;