import React, { useState } from 'react';
import './BigButtonComponent.css'; // Import your CSS file
import Start from './Start';
import CloseIcon from '@mui/icons-material/Close';

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
