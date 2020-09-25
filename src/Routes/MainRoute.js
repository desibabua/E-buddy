import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home.js';
import Products from '../components/Products.js';
import Product from '../components/Product.js';
import SearchedProducts from '../components/SearchedProducts';

const MainRoute = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/products/all"/>
      </Route>
      <Route exact path="/home" children={<Home />} />
      <Route exact path="/products/:category" children={<Products />} />
      <Route exact path="/search" children={<SearchedProducts />} />
      <Route exact path="/product/:id" children={<Product />} />
    </Switch>
  );
};

export default MainRoute;
