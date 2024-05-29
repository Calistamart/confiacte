import React from 'react';
import { Link } from 'react-router-dom';

const ExpertisesSection = () => {
  return (
    <section className="entry-expertises" id="expertises">
      <img className="parallax-letter" id="letter-1" src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/letter-b-b.svg" alt="Letter B" />
      <img className="parallax-letter" id="letter-2" src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/letter-l-w.svg" alt="Letter L" />
      <div className="wrapper_el">
        <div className="inner-expertises">
          <h3 className="section-label">Expertises en droit</h3>
          <ul className="expertises-list" id="expertises-list">
            <li>
            <Link to="/immobilier">
                Immobilier
                <div></div>
                <span>En savoir plus</span>
            </Link>
            </li>
            <li>
              <Link to="/page-non-trouvée">
                Patrimonial
                <div></div>
                <span>En savoir plus</span>
              </Link>
            </li>
            <li>
              <Link to="/page-non-trouvée">
                Public
                <div></div>
                <span>En savoir plus</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
