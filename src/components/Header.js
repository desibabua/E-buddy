import React from 'react';

import Logo from './Logo'
import SearchBar from './SearchBar'
import NavBar from './NavBar'

const Header = function (props) {
  return (
    <div className="header">
      <Logo/>
      <SearchBar/>
      <NavBar/>
    </div>
  );
};

export default Header;
