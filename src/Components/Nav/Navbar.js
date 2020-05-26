import React from 'react';
import Burger from './Burger';
import Nav from './StyleNav';

const Navbar = () => {
  return (
        <Nav>
            <div className="logo">
                agroMart App
      </div>
            <Burger />
        </Nav>
  );
};

export default Navbar;
