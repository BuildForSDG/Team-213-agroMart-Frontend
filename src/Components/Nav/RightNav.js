import React from 'react';
import Ul from './StyleRightNav';

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => (
        <Ul open={open}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign Up</li>
        </Ul>
);

export default RightNav;
