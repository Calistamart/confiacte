import React, { useState } from 'react';

const VideoOverlay = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => {
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openOverlay} className="open-video-btn">
        Watch Video
      </button>
      
      {isOpen && (
        <div className="video-overlay">
          <div className="video-overlay-content">
            <button className="close-btn" onClick={closeOverlay}>
              &times;
            </button>
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;
