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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  Pages
import Home from './Components/Home/index';
import About from './Components/About/Index';
import Help from './Components/Help/index';
import Login from './Components/Login/index';
import Sell from './Components/Sell/index';
import NoMatch from './Components/NoMatch';

//  Components
//  import NavigationBar from './Components/Navbar/index';
import Nav from './Components/Nav/Navbar';

//  *Routing of pages* //
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sell" component={Sell} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
