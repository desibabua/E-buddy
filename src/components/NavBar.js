import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {User} from '../Contexts';

const red_url = 'http://localhost:3002/authenticate/';

const Nav = function ({ url, name }) {
  return (
    <NavLink exact to={url} activeClassName="active-nav" className="nav">
      {name}
    </NavLink>
  );
};

const NavBar = function (props) {
  const { user } = useContext(User);

  return (
    <div className="navigation-bar">
      <Nav name="Home" url="/" />
      <Nav name="Products" url="/products" />
      {!user && <a className="nav" href={red_url+'login'}>Login</a>}
      {user && <a className="nav" href={red_url+'logout'}>Logout</a>}
    </div>
  );
};

export default NavBar;
