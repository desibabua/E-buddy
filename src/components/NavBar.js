import React from 'react';
import dotenv from 'dotenv';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

dotenv.config();

const NavigationBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
`;

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-nav" className="nav">
      {name}
    </NavLink>
  );
};

const NavBar = function () {
  return (
    <NavigationBar>
      <Nav name="Home" url="/home" />
      <Nav name="Products" url="/products/all" />
    </NavigationBar>
  );
};

export default NavBar;
