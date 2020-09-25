import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../Contexts';

const login_url = 'http://localhost:3002/api/login';
const logout_url = 'http://localhost:3002/api/logout';

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-nav" className="nav">
      {name}
    </NavLink>
  );
};

const UserOption = function () {
  const { user } = useContext(User);
  let url = login_url;
  let name = 'Login';
  if (user) {
    url = logout_url;
    name = 'Logout';
  }
  return (
    <a className="nav" href={url}>
      {name}
    </a>
  );
};

const NavBar = function (props) {
  return (
    <div className="navigation-bar">
      <Nav name="Home" url="/home" />
      <Nav name="Products" url="/products/all" />
      <UserOption />
    </div>
  );
};

export default NavBar;
