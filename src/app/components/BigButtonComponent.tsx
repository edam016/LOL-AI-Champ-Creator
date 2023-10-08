import React, { useState } from 'react';
import './BigButtonComponent.css'; // Import your CSS file
import Start from './Start';
import CloseIcon from '@mui/icons-material/Close';
import './hoverbutton-gold.css';

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
            <button className="button-hero">
            Create Champion
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
      )}

      {isWindowOpen && (
        <div className="big-window">
          <Start/>
          <button className="close-button" onClick={closeWindow}>
            <CloseIcon fontSize='large' />
          </button>
        </div>
      )}
    </div>
  );
};

export default BigButtonComponent;
