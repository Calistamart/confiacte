import React from 'react';
import FooterLinks from './FooterLinks';
import Logo from '../Common/Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="footer-logo">
          <Logo variant='white' />
        </div>
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
