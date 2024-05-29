import React from 'react';
import Notary from './Notary';
import patrick_img from '../../assets/patrick.png'
import michele_img from '../../assets/michele.png'

const Notaries = () => {
  const notaries = [
    {
      name: 'Patrick Papazian',
      location: 'Notaire Toulouse',
      imageUrl: patrick_img,
      link: '/page-non-trouvée',
    },
    {
      name: 'Michèle Sellem',
      location: 'Notaire Toulouse',
      imageUrl: michele_img,
      link: '/page-non-trouvée',
    },
    {
      name: 'Eric Grandjean',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Grandjean-Eric.jpg',
      link: 'https://www.blnotaires.fr/notaire/eric-grandjean/',
    },
    {
      name: 'Mathieu Maurin',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Maurin-Mathieu.jpg',
      link: 'https://www.blnotaires.fr/notaire/mathieu-maurin/',
    },
    {
      name: 'Cécile Zampini',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Zampini-Cecile.jpg',
      link: 'https://www.blnotaires.fr/notaire/cecile-zampini/',
    },
    {
      name: 'Julien Durafourg',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Durafourg-Julien.jpg',
      link: 'https://www.blnotaires.fr/notaire/julien-durafourg/',
    },
    {
      name: 'Laetitia Quesnel',
      location: 'Notaire Grenoble',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Quesnel-Laetitia-1.jpg',
      link: 'https://www.blnotaires.fr/notaire/laetitia-quesnel/',
    },
    {
      name: 'Sébastien Alalouf',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/AllaloufSebastien.jpg',
      link: 'https://www.blnotaires.fr/notaire/sebastien-alalouf/',
    },
  ];

  return (
    <div className="notaries-container">
      <section className="hero-index hero-index-notaries">
        <div className="wrapper_el">
          <div className="heading">
            <h1>Les notaires associés</h1>
            <p>&nbsp;</p>
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
                link={notary.link}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Notaries;
