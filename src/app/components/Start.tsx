import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from './Carousel';
import { SliderData } from './SliderData';


const Start = () => {
  const [isStarted, setIsStarted] = useState(false);

  const startProcess = () => {
    setIsStarted(true);
  };

  return (
    <div>
        {isStarted 
        ?  <ChampCreation /> :
        <div className='rules-text'>
          <div>
          <p className='text'>
          <h3><u><b>League of Legends Patch Notes - Champion Concept Creator</b></u></h3>
<br/>
Greetings, fellow summoners! I'm excited to introduce the new <u><b>AI League of Legends Champion Concept Creator</b></u>. Get ready to embark on a journey of creativity and innovation as you shape your very own champion for the Rift!<br/><br/>

📜 Patch Highlights:<br/>

- Dive into the creative process with a series of questions.<br/>
- Only the first prompt, which includes tags, is mandatory. The AI will help generate content for the remaining prompts, leaving the creative canvas open for your genius.<br/>
<br/>
📖 Patch Notes:
<br />
As dedicated fans of League of Legends and technology, we're thrilled to bring you this new tool. It's designed to help you craft your dream champion and breathe life into your unique ideas. You'll start with the first prompt, which focuses on tags, and from there, the possibilities are endless. Feel free to explore and unleash your imagination as you design your champion's lore, abilities, and more!
<br /><br/>
🎮 Ready to embark on your creative journey? Let's dive into the world of champion creation and make your mark on the Summoner's Rift. Happy designing!
<br /><br/>
Patch 12.3, Summoner's Rift, has never been this exciting. Stay tuned for more updates!
<br />

          </p>
          </div>
          {/* <div>
            <Carousel slides={SliderData} />
          </div> */}
          <button className='start-button' onClick={startProcess}>
            Im ready
          </button>
        </div>
        }
    </div>
  );
};

export default Start;
