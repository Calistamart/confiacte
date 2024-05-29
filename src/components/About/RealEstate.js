import React from 'react';

const RealEstate = () => {
    return (
      <main>
        <section className="hero-photo">
          <div className="hero_w100_h100">
            <div className="inner-hero">
              <img src="https://www.blnotaires.fr/wp-content/uploads/2019/05/salle-de-reunion-paris-filtre-1600x1200.jpg" alt="Salle de réunion Paris"/>
              <div className="heading">
                <div className="wrapper_880">
                  <div className="inner-heading">
                    <div></div>
                    <h1>Au service des opérateurs de l’immobilier</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="introduction">
            <div className="wrapper_880">
              <p>Grâce à ses notaires et collaborateurs pluridisciplinaires, l'Étude assiste ses clients tout au long du processus de mise en oeuvre de leur projet, du montage d’opération jusqu’à la rédaction des contrats finaux de droit public comme de droit privé.</p>
              <p>Nos prestations sont conçues pour répondre aux attentes des opérateurs suivants :</p>
            </div>
          </div>
        </section>
        <section className="editorial-part table">
          <div className="wrapper_1110">
            <div className="inner-table">
              <div className="cell">
                <p className="title">Collectivités publiques</p>
                <div className="description">
                  <ul>
                    <li>Conventions relatives à l’occupation du domaine public</li>
                    <li>Audit d’arbitrage / vente immobilière</li>
                    <li>Constitution du dossier d’information / vente immobilière</li>
                    <li>Aide à la commercialisation Les appels à projets</li>
                    <li>Vente et achat d’actifs immobiliers</li>
                    <li>Montage et mise en oeuvre d’opérations d’aménagement</li>
                    <li>Montage et mise en oeuvre d’opérations d’accession sociale à la propriété</li>
                  </ul>
                </div>
              </div>
              {/* Ajoutez ici les autres sections de contenu avec le même format */}
            </div>
          </div>
        </section>
        <section className="editorial-part img_text">
          <div className="inner-img">
            <img src="https://www.blnotaires.fr/wp-content/uploads/2019/03/5E4A6859-1600x1200.jpg" alt="Service des particuliers"/>
          </div>
          <div className="wrapper_1110">
            <div className="text">
              <h2>Au service des particuliers</h2>
              <p>Pour la solution la plus adaptée à vos préoccupations et à votre cadre familial et patrimonial.</p>
              <p><a href="/page-non-trouvée">Accéder à la page</a></p>
            </div>
          </div>
        </section>
      </main>
    );
  };

  export default RealEstate;