import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterContainer from './style';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Office Address</li>
                <li>Town</li>
                <li>City</li>
                <li>Tel</li>
                <li>Email</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Market</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/help">Help</a>
                </li>
                <li>
                  <a href="/sell">Sell</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>

            {/* Column3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Get Connected</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="facebook.com/agromart">Facebook</a>
                </li>
                <li>
                  <a href="facebook.com/agromart">Twitter</a>
                </li>
                <li>
                  <a href="facebook.com/agromart">LinkedIn</a>
                </li>
                <li>
                  <a href="facebook.com/agromart">instagram</a>
                </li>
              </ul>
            </div>

            {/* Column1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Subscribe</h4>
              <div className="formGroup field">
                <input type="input" className="formField" placeholder="Enter email" name="email" id='email'/>
                <label htmlFor="email" className="formLabel">Email</label>
                <button className="subBtn" type="button">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bootom */}
        <div className="footerBottom">
          <p className="text-xs-center">&copy;{new Date().getFullYear()} agroMart - All Rights Reserved.</p>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
