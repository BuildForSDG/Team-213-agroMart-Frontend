import React from 'react';
import Burger from './Burger';
import Nav from './StyleNav';

const Navbar = () => (
        <Nav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </Nav>
);

export default Navbar;
