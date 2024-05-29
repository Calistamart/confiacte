import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ name, location, description, imageUrl, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-inner">
          <button onClick={onClose}>X</button>
          <img src={imageUrl} alt={name} />
          <div id="popup-text">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <p id="popup-desc">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  Popup.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default Popup