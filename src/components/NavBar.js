import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { User } from '../Contexts';

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-nav" className="nav">
      {name}
    </NavLink>
  );
};

const NavOptions = function () {
  const { user } = useContext(User);

  if (user) {
    return [
      <Nav key="1" name="Profile" url="/profile" />,
      <Nav key="2" name="Logout" url="/logout" />,
    ];
  }
  return [
    <Nav key="3" name="SignIn" url="/signIn" />,
    <Nav key="4" name="SignUp" url="/signUp" />,
  ];
};

const NavBar = function (props) {
  return (
    <div className="navigation-bar">
      <Nav name="Home" url="/" />
      <Nav name="Products" url="/products" />
      {NavOptions()}
    </div>
  );
};

export default NavBar;
