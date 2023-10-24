"use client";
require('dotenv').config()
import React, { useState } from 'react';
import EntryList from './components/EntryList';
import './page.css';
import Navbar from './components/Navbar';
import BigButtonComponent from './components/BigButtonComponent';
import videoSrc from './assets/video/test.mp4';
import MusicPlayer from './components/Music';
import {Cloudinary} from "@cloudinary/url-gen";


function Page() {
  const cld = new Cloudinary({cloud: {cloudName: 'dsg28e1fv'}});
  const [windowStatus, setWindowStatus] = useState(false);

  const setIsWindowStatus = (val: React.SetStateAction<boolean>) => {
    setWindowStatus(!val);
    console.log(windowStatus)
  }

  const musicStatus = windowStatus ? 1 : 0;

  return (
    <div className="App bg">
      {/* <link rel="preload" href="src/app/assets/images/splash/ziggs-bg.jpg" as="image"></link> */}
      {/* <video src={videoSrc} autoPlay loop/> */}
      <div className='content'>
        <Navbar />
        <div style={{zIndex: '20'}}>
        <BigButtonComponent setIsWindowStatus={setIsWindowStatus}/>
        </div>
        <div className='music-player-container' style={{ zIndex: '19', opacity: musicStatus}}>
        <MusicPlayer/>
        </div>
      </div>
    </div>
  );
}

export default Page;
