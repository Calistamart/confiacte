import React from 'react';
import { Link } from 'react-router-dom'
import patrick_img from '../../assets/patrick.png'
import michele_img from '../../assets/michele.png'

const notaries = [
  {
    name: 'Patrick Papazian',
    role: 'Notaire Toulouse',
    description: 'Patrick Papazian a intégré l’Étude ConfiActe en 1985 comme stagiaire et devient associé en 1991, dès l’obtention de son diplôme supérieur du notariat à l’Université de Toulouse I.',
    img: patrick_img,
  },
  {
    name: 'Michèle Sellem',
    role: 'Notaire Toulouse',
    description: 'Michèle Sellem a rejoint l’Étude ConfiActe en 1997 et est devenue Notaire associée en 2004, après une collaboration de 17 années riches d’enseignements.',
    img: michele_img,
  },
  // Ajoutez d'autres notaires ici
];

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="wrapper_el">
        <div className="inner-profil">
          <h2>Des expertises adaptées à votre besoin</h2>
          <p>Une étude généraliste avec des savoir-faire de spécialistes. Vous écouter, vous conseiller et vous accompagner en offrant sécurité et efficacité.</p>
        </div>
        <div className="profiles">
          {notaries.map((notaire, index) => (
            <div key={index} className="single-profile">
              <Link to="/les-notaires">
                <div className="profile-img">
                  <img src={notaire.img} alt={notaire.name} />
                </div>
                <div className="profile-info">
                  <h2>{notaire.name}</h2>
                  <h3>{notaire.role}</h3>
                  <p>{notaire.description}</p>
                </div>
                </Link>
            </div>
          ))}
        </div>
        <div className="bottom-bar wrapper_el">
        <img src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/icons/arrow-d-w.svg" alt="Arrow Down" />
        <div className="inner-bottom-bar">
          <a href="#expertises" className="section-label scroll-btn">Continuer</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProfileSection;
