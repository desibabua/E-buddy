import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../components/Home.js';
import Product from '../components/Product.js';
import ProductsWithAds from '../components/ProductsWithAds.js';
import SearchedProductsWithAds from '../components/SearchedProductsWithAds.js';

const MainRoute = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" children={<Home />} />
      <Route exact path="/products/:category" children={<ProductsWithAds />} />
      <Route exact path="/search" children={<SearchedProductsWithAds />} />
      <Route exact path="/product/:id" children={<Product />} />
    </Switch>
  );
};

export default MainRoute;
