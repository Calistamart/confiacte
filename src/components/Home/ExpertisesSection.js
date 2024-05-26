import React from 'react';

const ExpertisesSection = () => {
  return (
    <section className="entry-expertises" id="expertises">
      <img className="parallax-letter" id="letter-1" src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/letter-b-b.svg" alt="Letter B" />
      <img className="parallax-letter" id="letter-2" src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/letter-l-w.svg" alt="Letter L" />
      <div className="wrapper_1110">
        <div className="inner-expertises">
          <h3 className="section-label">Expertises en droit</h3>
          <ul className="expertises-list" id="expertises-list">
            <li>
              <a href="https://www.blnotaires.fr/notaire-toulouse-immobilier/">
                Immobilier
                <div></div>
                <span>En savoir plus</span>
              </a>
            </li>
            <li>
              <a href="https://www.blnotaires.fr/notaire-toulouse-particuliers/">
                Patrimonial
                <div></div>
                <span>En savoir plus</span>
              </a>
            </li>
            <li>
              <a href="https://www.blnotaires.fr/notaire-toulouse-public/">
                Public
                <div></div>
                <span>En savoir plus</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSection;
