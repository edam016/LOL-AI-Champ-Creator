import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from './Carousel';
import { SliderData } from './SliderData';
import './hoverbutton.css';


const Start = () => {
  const [isStarted, setIsStarted] = useState(false);

  const startProcess = () => {
    setIsStarted(true);
  };
  const stopProcess = () => {
    setIsStarted(false);
  }

  return (
    <div>
        {isStarted 
        ?  <ChampCreation stopProcess={stopProcess}/> :
        <div className='rules-text'>
          <div>
          <div className='text'>
          <h3><u><b>League of Legends Patch Notes - Champion Concept Creator</b></u></h3>
<br/>
Greetings, fellow summoners! I'm excited to introduce the new <u><b>AI League of Legends Champion Concept Creator</b></u>. Get ready to embark on a journey of creativity and innovation as you shape your very own champion for the Rift!<br/><br/>

📜 Patch Highlights:<br/>

- Dive into the creative process with a series of questions.<br/>
<u><b> - Only the first prompt, which includes tags, is mandatory. The AI will help generate content for the remaining prompts, leaving the creative canvas open for your genius.</b></u><br/>
<br/>
📖 Patch Notes:
<br />
As a dedicated fan of League of Legends and technology, I'm thrilled to bring you this new tool. It's designed to help you craft your dream champion and breathe life into your unique ideas. You'll start with the first prompt, which focuses on tags, and from there, the possibilities are endless. Feel free to explore and unleash your imagination as you design your champion's lore, abilities, and more!
<br /><br/>
🎮 Ready to embark on your creative journey? Let's dive into the world of champion creation and make your mark on the Summoner's Rift. Happy designing!
<br /><br/>

          </div>
          </div>
          {/* <div>
            <Carousel slides={SliderData} />
          </div> */}
          <button className="button start-button" onClick={startProcess}>
            Let's Begin
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </button>
        </div>
        }
    </div>
  );
};

export default Start;
