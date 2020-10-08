import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 100px;
  background-color: #d6e0f0;
`;

const Header = function (props) {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
