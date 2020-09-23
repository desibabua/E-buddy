import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-product-nav" className="product-nav">
      {name}
    </NavLink>
  );
};

const ProductNav = function () {
  return (
    <div className="product-nav-bar">
      <Nav name="All" url="/products/all" />
      <Nav name="Clothes" url="/products/clothes" />
      <Nav name="Men" url="/products/men" />
      <Nav name="Women" url="/products/women" />
      <Nav name="Electronics" url="/products/electronics" />
      <Nav name="Phones" url="/products/phone" />
      <Nav name="Sports" url="/products/sports" />
      <Nav name="Books" url="/products/books" />
    </div>
  );
};

export default ProductNav;
