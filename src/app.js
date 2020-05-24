/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */
//  Default Code
/*
const app = async () => '#BuildforSDG';

export default app;
*/


//  Update with reactjs
//  React import statement
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//  Pages
import Home from './Components/Home/index';
import About from './Components/About/Index';
import Help from './Components/Help/index';
import Login from './Components/Login/index';
import Sell from './Components/Sell/index';
import Navbar from './Components/Navbar/index';


//  *Routing of pages* //
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sell">
          <Sell />
        </Route>
      </div>
    </Router>
  );
};

export default App;
