import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import './hoverbutton.css';
import ChampionView from './ChampionView';


const Start = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [champReady, setChampReady] = useState(false);
  const [result, setResult] = useState("");

  const startProcess = () => {
    setIsStarted(true);
  };
  const stopProcess = () => {
    setIsStarted(false);
  }

  const showChampion = () => {
    setIsStarted(false);
    setChampReady(true);
  }
  const saveResult = (data: React.SetStateAction<string>) => {
    setResult(data);
  }

  const rulesText = () => (
    <div className='rules-text fade-in screen-change-text'>
    <div className='text'>
    <h3><u><b>League of Legends Patch Notes - Champion Concept Creator</b></u></h3>
        <br/>
        Greetings, fellow summoners! I'm excited to introduce the new <u><b>AI League of Legends Champion Concept Creator</b></u>. Get ready to embark on a journey of creativity and innovation as you shape your very own champion for the Rift!<br/><br/>
        📜 Patch Highlights:<br/>
        - Dive into the creative process of champion creation using the power of AI
        <br/>
        - Add tags related to your champion with your imagination being the limit
        <br/>
        <br />
        📖 Patch Notes:
        <br />
        As a dedicated fan of League of Legends and technology, I'm thrilled to bring you this new tool. It's designed to help you craft your dream champion and breathe life into your unique ideas. 
        You'll start with a prompt, which asks for tags related to your champion, and with the power of AI using OpenAI's API, the possibilities are endless!<br/> Feel free to explore and unleash your imagination as you design your champion's lore, abilities, and more!
        <br /><br/>
        🎮 Ready to embark on your creative journey? Let's dive into the world of champion creation and make your mark on the Summoner's Rift. Happy designing!
        <br /><br/>
    </div>
    <button className="button start-button" onClick={startProcess}>
      Let's Begin
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </button>
  </div>
  );

  const condition1 = () => (
    isStarted && !champReady ?  <ChampCreation saveResult={saveResult} stopProcess={stopProcess} showChampion={showChampion}/> : rulesText()
  );
  return (
    <div>
        {!champReady ? condition1() : <div className='fade-in'><ChampionView result={result}/></div>}
    </div>
  );
};

export default Start;
