import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Common/Logo'
import toulouse_img from '../../assets/toulouse.jpg'
import grenoble_img from '../../assets/grenoble.jpg'

const OfficesSection = () => {
    const toulouse = toulouse_img;
  return (
    <section className="offices-section">
      <div className="wrapper_el">
        <div className="inner-offices">
          <div className="presentation">
            <h3 className="section-label">Études notariales</h3>
            <p>
              Historiquement implantée sur Toulouse depuis 1965, l’Etude ConfiActe concentre ses activités sur deux lieux géographiques avec ses offices à Toulouse et à Grenoble pour offrir une dimension territoriale élargie et renforcer ainsi la proximité avec ses clients.
            </p>
          </div>
            <Logo variant='dark'/>          
            <div className="offices">
            <Link to="/page-non-trouvée" className="single-office first">
              <div className="rect-anim"></div>
              <div className="inner-single">
                <img src={toulouse} alt="Office Toulouse" />
                <h3>Toulouse</h3>
              </div>
            </Link>
            <Link to="/page-non-trouvée" className="single-office second">
              <div className="rect-anim"></div>
              <div className="inner-single">
                <img src={grenoble_img} alt="Office Grenoble" />
                <h3>Grenoble</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
