import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

import Home from '../components/Home.js';
import Products from '../components/Products.js';
import Product from '../components/Product.js';

const MainRoute = function () {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route exact path="/products/:category" children={<Products />} />
      <Route exact path="/product/:id" children={<Product />} />
      <Login exact path="/login" />
    </Switch>
  );
};

export default MainRoute;
