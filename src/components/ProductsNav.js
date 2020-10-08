import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
`;

const Nav = function ({ url, name }) {
  return (
    <NavLink
      exact
      to={url}
      activeClassName="active-product-nav"
      className="product-nav"
    >
      {name}
    </NavLink>
  );
};

const ProductNav = function () {
  return (
    <NavBar>
      <Nav name="All" url="/products/all" />
      <Nav name="Clothes" url="/products/clothes" />
      <Nav name="Men" url="/products/men" />
      <Nav name="Women" url="/products/women" />
      <Nav name="Electronics" url="/products/electronics" />
      <Nav name="Phones" url="/products/phone" />
      <Nav name="Sports" url="/products/sports" />
      <Nav name="Books" url="/products/books" />
    </NavBar>
  );
};

export default ProductNav;
