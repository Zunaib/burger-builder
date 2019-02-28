import React from 'react';
import classes from './Layout.css';

import Auxilary from '../../hoc/Auxilary';

const Layout = (props) => (
    <Auxilary>
        <div> Toolbar, Navbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilary>

);

export default Layout;