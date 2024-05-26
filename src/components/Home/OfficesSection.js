import React from 'react';
import Logo from '../Common/Logo'

const OfficesSection = () => {
  return (
    <section className="offices-section">
      <div className="wrapper_1110">
        <div className="inner-offices">
          <div className="presentation">
            <h3 className="section-label">Études notariales</h3>
            <p>
              Historiquement implantée sur Toulouse depuis 1965, l’Etude ConfiActe concentre ses activités sur deux lieux géographiques avec ses offices à Toulouse et à Paris pour offrir une dimension territoriale élargie et renforcer ainsi la proximité avec ses clients.
            </p>
          </div>
            <Logo variant='dark'/>          
            <div className="offices">
            <a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-toulouse/" className="single-office first">
              <div className="rect-anim"></div>
              <div className="inner-single">
                <img src="https://www.blnotaires.fr/wp-content/uploads/2019/03/etude-toulouse-3-ld-450x550.jpg" alt="Office Toulouse" />
                <h3>Toulouse</h3>
              </div>
            </a>
            <a href="https://www.blnotaires.fr/contact-notaires-toulouse-paris/etude-notaires-paris/" className="single-office second">
              <div className="rect-anim"></div>
              <div className="inner-single">
                <img src="https://www.blnotaires.fr/wp-content/uploads/2019/05/IMG_0048-450x550.jpeg" alt="Office Paris" />
                <h3>Paris</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
