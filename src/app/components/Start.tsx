import React, { useState } from 'react';
import ChampCreation from './ChampCreation';
import './Start.css';
import './hoverbutton.css';
import ChampionView from './ChampionView';


const Start = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [champReady, setChampReady] = useState(false);
  const [result, setResult] = useState("");
  const [resultTags, setResultTags] = useState("");

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
  const saveResult = (data: React.SetStateAction<string>, tags: React.SetStateAction<string>) => {
    setResult(data);
    setResultTags(tags);
  }

  const rulesText = () => (
    <div className='rules-text fade-in screen-change-text'>
    <div className='text'>
    <h3><u><b>League of Legends Patch Notes - Champion Concept Creator</b></u></h3>
        <br/>
        Greetings, summoner! I&apos;m excited to introduce the new<u><b>AI League of Legends Champion Concept Creator</b></u>. Get ready to embark on a journey of creativity and innovation as you shape your very own champion for the Rift!<br/><br/>
        📜 Patch Highlights:<br/>
        - Dive into the creative process of champion creation using the power of AI
        <br/>
        - Add tags related to your champion with your imagination being the limit
        <br/>
        <br />
        📖 Patch Notes:
        <br />
        As a dedicated fan of League of Legends and coding, I&apos;m thrilled to bring you this new tool. It&apos;s designed to help you craft your dream champion and breathe life into your unique ideas. 
        You&apos;ll start with a prompt, which asks for tags related to your imaginary champion, and with the power of artificial intelligence using OpenAI&apos;s API in conjunction with Stability.AI&apos;s generative AI, the possibilities are endless!<br/> Feel free to explore and unleash your imagination as you design your champion&apos;s lore, abilities, and more!
        <br /><br/>
        🎮 Ready to embark on your creative journey? Let&apos;s dive into the world of champion creation and make your mark on Summoner&apos;s Rift. Happy creating!
        <br /><br/>

        <h2>Warning, Summoner! Please be patient with the tool as the AI is working tirelessly to bring to life your finest creations. It may take some time to load, but trust us, it&apos;ll be worth the wait!</h2>
    </div>
    <button className="button start-button" onClick={startProcess}>
      Let&apos;s Begin
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
        {!champReady ? condition1() : <div className='fade-in'><ChampionView resultTags={resultTags} result={result}/></div>}
    </div>
  );
};

export default Start;
