import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes/MainRoute';
import Header from './components/Header';

import './css/App.css';
import './css/Header.css';
import './css/Products.css';
import './css/Product.css';
import './css/ProductNav.css';
import './css/Reviews.css';

import { User } from './Contexts';
import useUser from './hooks';

const App = function () {
  const user = useUser();

  return (
    <User.Provider value={{ user }}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </User.Provider>
  );
};

export default App;
