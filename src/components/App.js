import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import About from './About';
import Home from './Home';

import { items } from '../data';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', 'sans-serif';
  }
`;

const App = (props) => {
  return (
    <Router>
    <GlobalStyle />
      <Header />
      <div>
          <Switch>
              <Route exact path='/'>
                <Home listOfFruits={Object.values(items)}/>
              </Route>
              
              <Route exact path='/about'>
                <About />
              </Route>
              
              <Route exact path='/items/:itemId'>
                Single item
              </Route>
          </Switch>
      </div>
    </Router>
  );
};

export default App;
