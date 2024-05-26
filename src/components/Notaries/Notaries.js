import React from 'react';
import Notary from './Notary';

const Notaries = () => {
  const notaries = [
    {
      name: 'Patrick Papazian',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Papazian-Patrick.jpg',
      link: 'https://www.blnotaires.fr/notaire/patrick-papazian/',
    },
    {
      name: 'Michèle Sellem',
      location: 'Notaire Toulouse',
      imageUrl: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/SellemMichele.jpg',
      link: 'https://www.blnotaires.fr/notaire/michele-sellem/',
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
      location: 'Notaire Paris',
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
        <div className="wrapper_1110">
          <div className="heading">
            <h1>Les notaires associés</h1>
            <p>&nbsp;</p>
          </div>
        </div>
      </section> 

      <section className="notaries-associes">
        <div className="wrapper_1110">
          <div className="inner-notaries-associes">
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
        </div>
      </section>
    </div>
  );
};

export default Notaries;
