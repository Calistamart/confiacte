import React from 'react';

const ContactDetails = () => {
  return (
    <div className="contact-page">
      <section className="hero-all-etudes">
        <h2 className="parallax-cities bottom">Grenoble</h2>
        <h2 className="parallax-cities top">Toulouse</h2>
        <div className="wrapper_el">
          <div className="heading">
            <h1>Contact</h1>
            <div className="blocs_w50">
              <div></div>
              <h2>Grenoble</h2>
              <p>Située en plein coeur du XVIème arrondissement de Grenoble, au 111, rue de Longchamp, l'Étude occupe le rez-de-chaussée d’un hôtel particulier, rénové très récemment.</p>
              <a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-paris/" className="outline-cta white-outline">
                <div></div>
                Découvrir
              </a>
            </div>
            <div className="blocs_w50">
              <div></div>
              <h2>Toulouse</h2>
              <p>Située au 30, boulevard Maréchal Leclerc, au coeur du quartier Compans-Caffarelli, l'Étude occupe les cinq niveaux d’un bâtiment lumineux et moderne, qui offre un cadre de travail agréable, confortable et pratique.</p>
              <a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-toulouse/" className="outline-cta white-outline">
                <div></div>
                Découvrir
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
