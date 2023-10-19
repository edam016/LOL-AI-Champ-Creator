"use client";
require('dotenv').config()
import React from 'react';
import EntryList from './components/EntryList';
import './page.css';
import Navbar from './components/Navbar';
import BigButtonComponent from './components/BigButtonComponent';
import videoSrc from './assets/video/test.mp4';
import MusicPlayer from './components/Music';
import {Cloudinary} from "@cloudinary/url-gen";


function Page() {
  const cld = new Cloudinary({cloud: {cloudName: 'dsg28e1fv'}});

  return (
    <div className="App bg">
      {/* <link rel="preload" href="src/app/assets/images/splash/ziggs-bg.jpg" as="image"></link> */}
      {/* <video src={videoSrc} autoPlay loop/> */}
      <div className='content'>
        <Navbar />
        <div style={{zIndex: '20'}}>
        <BigButtonComponent />
        </div>
        <div className='music-player-container' style={{ zIndex: '19'}}>
        <MusicPlayer />
        </div>
      </div>
    </div>
  );
}

export default Page;
