import React from 'react';
import Logo from '../Common/Logo.js'

const HeroSection = () => {
  return (
    <section className="hero-home">
      <div className="hero_w100_h100">
        <div className="inner-video" id="inner-video">
          <div id="overlay"></div>
          <div className="video">
            <video id="video_player" autoPlay loop muted>
              <source src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/videos/cabinet-notarial-3.mp4" type="video/mp4" />
              <source src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/videos/cabinet-notarial-3.ogv" type="video/ogv" />
              Your browser does not support the video tag.
            </video>
          </div>
          <img id="touch-only" src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/blnotaires-groupe-hotspot.jpg" alt="Touch only" />
        </div>
        <div className="home-heading">
          <Logo variant="white" />
          <h1 style={{ fontFamily: 'Walsheim Medium', fontSize: '18px', color: '#ffffff', marginBottom: '20px' }}>
            NOTAIRES<br />Toulouse - Paris
          </h1>
          <h2 style={{ fontFamily: 'Vidaloka', fontSize: '28px', color: '#ffffff' }}>
            Une expertise sur-mesure
          </h2>
        </div>
      </div>
      <div className="bottom-bar wrapper_1110">
        <img src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/icons/arrow-d-w.svg" alt="Arrow Down" />
        <div className="inner-bottom-bar">
          <a href="#expertises" className="section-label scroll-btn">Continuer</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
