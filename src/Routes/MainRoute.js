import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

import Home from '../components/Home.js';
import Products from '../components/Products.js';

const MainRoute = function () {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route exact path="/products" children={<Products />} />
      <Login exact path="/login" />
    </Switch>
  );
};

export default MainRoute;
