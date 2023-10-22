import React, { useState, useEffect } from 'react';
import Start from './Start';
import CloseIcon from '@mui/icons-material/Close';
import './hoverbutton-gold.css';
import './BigButtonComponent.module.css';

const BigButtonComponent = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a setTimeout to start the animation after 2 seconds
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 2000 milliseconds (2 seconds)

    // Cleanup the timeout to prevent memory leaks
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div>
      {isWindowOpen ? (
        <span />
      ) : (
        <div onClick={openWindow} className={`animate-button ${isVisible ? 'show' : ''}`}>
          <button className="button-hero start-button">
            <span style={{ color: '#fff' }}>Create Champion</span>
          </button>
        </div>
      )}

      {isWindowOpen && (
        <div className="big-window">
          <Start />
          <button className="close-button" onClick={closeWindow}>
            <CloseIcon fontSize='large' />
          </button>
        </div>
      )}
    </div>
  );
};

export default BigButtonComponent;
