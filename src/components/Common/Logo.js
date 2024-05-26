import React from 'react';
import logoWhite from '../../assets/logo_white.png'; // Chemin vers votre logo blanc
import logoDark from '../../assets/logo_dark.png'; // Chemin vers votre logo sombre

const Logo = ({ variant = 'white' }) => {
  const logoSrc = variant === 'white' ? logoWhite : logoDark;

  return (
    <a className="logo" href="/">
      <img src={logoSrc} alt="ConfiActe Logo" />
    </a>
  );
};

export default Logo;
