import React from 'react';
import logo from '../e-buddy-logo.svg';

const Logo = function () {
  return (
    <div className="logo-container">
      <img src={logo} alt="e-buddy-logo" className="logo" />
      <p>E-BUDDY</p>
    </div>
  );
};

export default Logo;
