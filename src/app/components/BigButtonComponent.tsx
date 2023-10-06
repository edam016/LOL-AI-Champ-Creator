import React, { useState } from 'react';
import './BigButtonComponent.css'; // Import your CSS file
import ChampCreation from './ChampCreation';

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
      {isWindowOpen ? <span /> : <button className="riot-button" onClick={openWindow}>
        Create Champion
      </button>}

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
