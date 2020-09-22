import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home.js';
import Products from '../components/Products.js';

const MainRoute = function () {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route exact path="/products" children={<Products />} />
    </Switch>
  );
};

export default MainRoute;
