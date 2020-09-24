import React from 'react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import ProductNav from './ProductsNav';

const Header = function (props) {
  return (
    <div>
      <div className="header">
        <Logo />
        <SearchBar />
        <NavBar />
      </div>
      <ProductNav />
    </div>
  );
};

export default Header;
