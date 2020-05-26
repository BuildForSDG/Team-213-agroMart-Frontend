import React from 'react';
import Ul from './StyleRightNav';

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => (
    <Ul open={open}>
            <li><a href='/'>Market</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/help'>Help</a></li>
            <li><a href='/sell'>Sell</a></li>
            <li><a href='/login'>Login</a></li>
        </Ul>
);

export default RightNav;
