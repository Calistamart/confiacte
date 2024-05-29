import React from 'react';
import Notary from './Notary';
import patrick_img from '../../assets/patrick.png'
import michele_img from '../../assets/michele.png'
import eric_img from '../../assets/eric.png'

const Notaries = () => {
  const notaries = [
    {
      name: 'Patrick Papazian',
      location: 'Notaire Toulouse',
      imageUrl: patrick_img,
      description: "Patrick est un notaire éminent de Toulouse, célèbre pour sa compréhension profonde du droit et son engagement envers la justice sociale. Diplômé de l'Université de Toulouse, il a fondé son propre cabinet après avoir acquis une solide expérience dans un prestigieux cabinet de notariat. Reconnu pour sa capacité à tisser des relations significatives avec ses clients, Patrick excelle dans la gestion des affaires courantes comme les testaments et les transactions immobilières, ainsi que dans des cas de succession complexes. Actif dans sa communauté, il offre des consultations gratuites et participe à des conférences pour partager son expertise."
    },
    {
      name: 'Michèle Sellem',
      location: 'Notaire Toulouse',
      imageUrl: michele_img,
      description: "à compléter"
    },
    {
      name: 'Eric Grandjean',
      location: 'Notaire Toulouse',
      imageUrl: eric_img,
      description: "à compléter"
    },
  ];

  return (
    <div className="notaries-container">
      <section className="hero-index hero-index-notaries">
<div className="wrapper_el">
          <div className="heading">
          <h1>Les notaires associés</h1>
          </div>
        </div>
      </section> 

      <section className="notaries-associes">
        <div className="wrapper_el cards">
            {notaries.map((notary, index) => (
              <Notary
                key={index}
                name={notary.name}
                location={notary.location}
                imageUrl={notary.imageUrl}
                description={notary.description}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Notaries;
