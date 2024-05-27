import React from 'react';

const notaries = [
  {
    name: 'Patrick Papazian',
    role: 'Notaire Toulouse',
    description: 'Patrick Papazian a intégré l’Étude BL en 1985 comme stagiaire et devient associé en 1991, dès l’obtention de son diplôme supérieur du notariat à l’Université de Toulouse I.',
    img: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/Papazian-Patrick.jpg',
    videoUrl: 'https://www.youtube.com/embed/yy_Ma3NnVP8?rel=0&showinfo=0&autoplay=1'
  },
  {
    name: 'Michèle Sellem',
    role: 'Notaire Toulouse',
    description: 'Michèle Sellem a rejoint l’Étude BL en 1987 et est devenue Notaire associée en 2004, après une collaboration de 17 années riches d’enseignements.',
    img: 'https://www.blnotaires.fr/wp-content/uploads/2019/03/SellemMichele.jpg',
    videoUrl: ''
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
              <div className="profile-img">
                <img src={notaire.img} alt={notaire.name} />
              </div>
              <div className="profile-info">
                <h2>{notaire.name}</h2>
                <h3>{notaire.role}</h3>
                <p>{notaire.description}</p>
                {notaire.videoUrl && (
                  <div className="video-notaire">
                    <div className="js-overlay-start start" data-url={notaire.videoUrl}>
                      <div className="play-btn">
                        <img src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/icons/play-btn.svg" alt="Play Video" />
                        <div className="under-circle"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
