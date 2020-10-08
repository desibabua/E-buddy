import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/MainRoute';
import Header from './components/Header';

import './css/index.css';

import { User } from './Contexts';
import useUser from './hooks';
import ProductNav from './components/ProductsNav';

const App = function () {
  const user = useUser();

  return (
    <User.Provider value={{ user }}>
      <Router>
        <Header />
        <ProductNav/>
        <Routes />
      </Router>
    </User.Provider>
  );
};

export default App;
