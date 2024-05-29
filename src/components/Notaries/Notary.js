import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from '../Common/Popup';

const Notary = ({ name, location, imageUrl, link, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="card">
        <a href={link} className="single-notary open-notary"onClick={(e) => {
        e.preventDefault();
        togglePopup();
      }}>
        <img className="profil-notary" src={imageUrl} alt={`${name}`} />
        <div className="name">
            <h2>{name}</h2>
            <h3>{location}</h3>
        </div>
        </a>
        {isOpen && <Popup name={name} location={location} description={description} imageUrl={imageUrl} onClose={togglePopup} />}
    </div>
  );
};

Notary.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Notary;
