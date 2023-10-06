import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import CloseIcon from '@mui/icons-material/Close';

const Start = () => {
  const [isStarted, setIsStarted] = useState(false);

  const openWindow = () => {
    setIsStarted(true);
  };

  const closeWindow = () => {
    setIsStarted(false);
  };

  return (
    <div>
        {isStarted 
        ?  <ChampCreation /> :
        <div>
          <div>
          <p>
            League of Legends AI Champ Creator
          </p>
          </div>
          <button className='start-button'>
            Im ready
          </button>
        </div>
        }
    </div>
  );
};

export default Start;
