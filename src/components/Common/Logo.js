import React from 'react';
import logoWhite from '../../assets/logo_white.png';
import logoDark from '../../assets/logo_dark.png';

const Logo = ({ variant = 'white' }) => {
  const logoSrc = variant === 'white' ? logoWhite : logoDark;

  return (
    <a className="logo" href="/">
      <img src={logoSrc} alt="ConfiActe Logo" />
    </a>
  );
};

export default Logo;
