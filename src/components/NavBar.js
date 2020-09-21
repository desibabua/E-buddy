import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-nav" className="nav">
      {name}
    </NavLink>
  );
};

const NavBar = function (props) {
  return (
    <div className="navigation-bar">
      <Nav name="Home" url="/" />
      <Nav name="Products" url="/products" />
    </div>
  );
};

export default NavBar;
