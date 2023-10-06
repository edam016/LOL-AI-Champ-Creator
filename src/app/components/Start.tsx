import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import CloseIcon from '@mui/icons-material/Close';

const Start = () => {
  const [isStarted, setIsStarted] = useState(false);

  const start = () => {
    setIsStarted(true);
  };

  return (
    <div>
        {isStarted 
        ?  <ChampCreation /> :
        <div className='rules-text'>
          <div>
          <h6>
            League of Legends AI Champ Creator
          </h6>
          <p className='text'>
            As a huge fan of League of Legends and also tech, I present an <b>AI League of Legends AI Champion Concept Creator</b>
            Answer questions regarding your champion with only the first prompt with tags being mandatory. All the fields after
            are optional and up to your creative liberties. Happy Creating on the rift!
          </p>
          </div>
          <button className='start-button' onClick={start}>
            Im ready
          </button>
        </div>
        }
    </div>
  );
};

export default Start;
