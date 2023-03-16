import React from 'react';
import styled from 'styled-components';

import logo from '../e-buddy-logo.svg';

const StyledLogo = styled.figure`
  display: flex;
  flex-grow: 0;
  width: 25%;
`;

const LogoImg = styled.img`
  height: 80px;
`;

const LogoCaption = styled.figcaption`
  font-size: 2.5rem;
  margin: 15px;
`;

const Logo = function () {
  return (
    <StyledLogo>
      <LogoImg src={logo} alt="e-buddy-logo" />
      <LogoCaption>E-Store</LogoCaption>
    </StyledLogo>
  );
};

export default Logo;
