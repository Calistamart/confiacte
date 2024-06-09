import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Common/Logo.js'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to="#" id="burger-menu" onClick={toggleMenu}>
          <div className={`burger ${isOpen ? 'open' : ''}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </Link>
        <div className="line_100vh"></div>
        <Logo variant='dark'/>
      </div>

      <div id="nav-right" className={isOpen ? 'open' : ''}>
        <ul className="nav-menu">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/nos-valeurs">Nos valeurs</Link></li>
          <li><Link to="/les-notaires">Les notaires</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
