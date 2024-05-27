import React from 'react';
import PropTypes from 'prop-types';

const Notary = ({ name, location, imageUrl, link }) => {
  return (
    <div className="card">
        <a href={link} className="single-notary open-notary">
        <img className="profil-notary" src={imageUrl} alt={`${name}`} />
        <div className="name">
            <h2>{name}</h2>
            <h3>{location}</h3>
        </div>
        </a>
    </div>
  );
};

Notary.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Notary;
