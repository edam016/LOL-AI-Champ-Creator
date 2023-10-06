import React, { useState } from 'react';
import './BigButtonComponent.css'; // Import your CSS file
import ChampCreation from './ChampCreation';
import buttonSrc from '../assets/graphics/lol-cta-hero.png';
import Image from 'next/image'; 
import cta from '../assets/graphics/highdef-lol-cta.png';
import ctaHover from '../assets/graphics/hover-hero-cta.png';

const BigButtonComponent = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

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
        <div className="riot-button" onClick={openWindow}>
          Create Champion
        </div>
      )}

      {isWindowOpen && (
        <div className="big-window">
          <ChampCreation />
          <button className="close-button" onClick={closeWindow}>
            Close Window
          </button>
        </div>
      )}
    </div>
  );
};

export default BigButtonComponent;
