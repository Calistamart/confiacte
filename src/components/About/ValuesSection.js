import React from 'react';

const ValuesSection = () => {
  return (
    <div className="values-section">
      <section className="hero-video">
        <div className="h100 w100 pos-rel">
          <div className="youtube-player hero-player" data-id="oetgY1-GHP8">
            <div className="pos-rel cursor-point">
              <div className="thumbnail-img" style={{ background: "url('https://www.blnotaires.fr/wp-content/uploads/2019/05/Capture-d’écran-2019-05-07-à-09.28.09.png') 50% 50%" }}></div>
              <div className="play-btn">
                <img src="https://www.blnotaires.fr/wp-content/themes/etudebl/library/images/icons/play-btn.svg" alt="Play Button" />
                <div className="under-circle"></div>
              </div>
            </div>
            <div className="targetPlayer"></div>
          </div>
        </div>
        <div className="inner-heading">
          <div className="wrapper_el">
            <div className="heading">
              <div className="inner-title">
                <h1>Nos valeurs</h1>
              </div>
              <div className="inner-introduction">
                <p>
                  Nous proposons à nos clients un examen global des enjeux et des problématiques liés à leurs projets. 
                  Nous affectons à chaque projet une équipe constituée de talents complémentaires. 
                  Nous anticipons les attentes et les besoins de nos clients par une préparation amont fouillée et minutieuse et par la création d’une relation de proximité et de confiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="editorial-part classic">
        <div className="wrapper_490">
          <p>
            Être notaire à l’Étude BL, c’est également un état d’esprit, une manière d’être et de travailler ensemble à la fois humaine, loyale, exigeante, et volontaire :
          </p>
          <ul>
            <li><strong>vis-à-vis des clients</strong>, par la priorité donnée à l’écoute, à la recherche de l’efficience et à la fidélisation,</li>
            <li><strong>vis-à-vis des collaborateurs</strong>, grâce à un management respectueux des personnalités ainsi qu’une ambitieuse politique de développement et de partage des compétences soutenus par des actions de formations constantes.</li>
          </ul>
        </div>
      </section>

      <section className="editorial-part img_text">
        <div className="inner-img">
          <img src="https://www.blnotaires.fr/wp-content/uploads/2019/05/IMG_0726-1600x1200.jpg" alt="Notre Identité" />
        </div>
        <div className="wrapper_el">
          <div className="text">
            <h2>Notre identité</h2>
            <p>Une étude généraliste avec des savoir-faire de spécialistes.</p>
            <p><a href="https://www.blnotaires.fr/notaires-toulouse-paris/notre-identite/">Accéder à la page</a></p>
          </div>
        </div>
      </section>

      <section className="related-posts">
        <div className="wrapper_el">
          <h3 className="section-label">News</h3>
          <h2>Les actualités de l'Étude</h2>
        </div>
        <div className="wrapper_el inner-cards">
          {/* Ajoutez ici le contenu dynamique des actualités */}
        </div>
        <div className="view-more">
          <a href="https://www.blnotaires.fr/publications/" className="snd-cta">Plus d'actualité</a>
        </div>
      </section>
    </div>
  );
};

export default ValuesSection;
