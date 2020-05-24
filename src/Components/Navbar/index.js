/* eslint-disable arrow-body-style */
import React from 'react';
import { StyledNav } from './style';

const Nav = () => {
  return (
    <StyledNav>
      <StyledNav.Brand href="/">
        <img alt="" src="../" width="30" height="30" className="d-inline-block align-top" /> agroMart App
      </StyledNav.Brand>
    </StyledNav>
  );
};

export default Nav;
