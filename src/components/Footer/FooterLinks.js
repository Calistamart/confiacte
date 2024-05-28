import React from 'react';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-column">
        <ul>
          <li><a href="https://www.blnotaires.fr/notaires-toulouse-paris/">L’étude</a></li>
          <li><a href="/honoraires">Honoraires</a></li>
          <li><a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/">Contact</a></li>
          <li><a href="https://www.blnotaires.fr/mentions-legales/">Mentions légales</a></li>
          <li><a href="https://www.blnotaires.fr/mentions-legales/">Politique de confidentialité</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-paris/">Grenoble</a></li>
          <li><a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-paris/">2 avenue Alsace Lorraine<br />38000 Grenoble</a></li>
          <li><a href="tel:+33188320994">Tél : +33 (0)4 XX XX XX XX</a></li>
          <li><a href="mailto:laetitia.quesnel@paris.notaires.fr">confiacte@grenoble.notaires.fr</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-toulouse/">Toulouse</a></li>
          <li><a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-toulouse/">30 boulevard Leclerc<br />31080 Toulouse CEDEX 6</a></li>
          <li><a href="tel:+33534455252">Tél : +33 (0)5 XX XX XX XX</a></li>
          <li><a href="mailto:bl-notaires@notaires.fr">confiacte@notaires.fr</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
