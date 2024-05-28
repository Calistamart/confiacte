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
        <a href="#" id="burger-menu" onClick={toggleMenu}>
          <div className={`burger ${isOpen ? 'open' : ''}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </a>
        <div className="line_100vh"></div>
        <Logo variant='dark'/>
      </div>

      <div id="nav-right" className={isOpen ? 'open' : ''}>
        <ul className="nav-menu">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/nos-valeurs">Nos valeurs</Link></li>
          <li><a href="/les-notaires">Les notaires</a></li>
          <li><a href="/publications">Publications</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
