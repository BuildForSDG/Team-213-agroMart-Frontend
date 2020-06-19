import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from  './Components/HomePage';
import ProductPage from './Components/ProductPage';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <nav className="container">
            <nav className="brand">
              <div className="logo" >
                agro<span>Mart</span>
              </div>
            </nav>
            <nav className="menu-links">
              <Link to="/" className="links">
                Market
              </Link>
              <a href="" className="menu-item links">
                About
              </a>
              <a href="" className="menu-item links">
                Sell
              </a>
              <a href="" className="menu-item links">
                Cart
              </a>
              <a href="" className="menu-item links">
                Login
              </a>
            </nav>
            <button  className="humberger">
             
              &#9776;
            </button>
          </nav>
        </header>

        <main className="main container ">
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </main>

        <footer className="footer">
          <div className="main-footer">
            <div className="container footer-items">
              <div className="footer-contact">
                <h2 className="footer-header">Contact</h2>
                <li>Office Addres</li>
                <li> Addres continue</li>
                <li>Email:</li>
                <li>Phone</li>
              </div>
              <div className="footer-links">
                <h2 className="footer-header">Quick Links</h2>
                <ul>
                  <li>
                    <a className="flinks" href="">
                      Market
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      Sell{" "}
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h2 className="footer-header">Get Connected</h2>
                <ul>
                  <li>
                    <a className="slinks" href="">
                      Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      Twitter{" "}
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      Instagram{" "}
                    </a>
                  </li>
                  <li>
                    <a className="flinks" href="">
                      LinkedIn{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="subscribe">
                <h2 className="footer-header">Subscribe</h2>
                <form action="">
                  <input type="email" name="" id="" />
                  <input type="button" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
