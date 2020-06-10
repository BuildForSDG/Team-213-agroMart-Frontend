import React from 'react';
import Burger from './Burger';
import Nav from './StyleNav';

const Navbar = () => (
        <Nav className="">
              <div className="logo"><span>agro</span>Mart
              </div>
             <Burger />
        </Nav>

);

export default Navbar;
