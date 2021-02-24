import React from 'react';
import classes from './Toolbar.module.css';
import NavItems from '../Navigation/NavItems/NavItems';
import { Link } from 'react-router-dom';
import Toggle from '../Drawer/Toggle/Toggle'



const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Toggle clicked={props.ToggleClicked} />
        <nav className={classes.Desktop}>
            <Link exact to = '/'>
                <h2>lamian/regalia</h2>
            <p>All orders 15% off with the code "BLOOD15"</p>
            </Link>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;