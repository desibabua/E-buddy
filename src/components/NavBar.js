import React, { useContext } from 'react';
import dotenv from 'dotenv';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { User } from '../Contexts';

dotenv.config();

const NavigationBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
`;

const login_url = process.env.REACT_APP_LOGIN_POINT;
const logout_url = process.env.REACT_APP_LOGOUT_POINT;

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
    <NavigationBar>
      <Nav name="Home" url="/home" />
      <Nav name="Products" url="/products/all" />
      <UserOption />
    </NavigationBar>
  );
};

export default NavBar;
