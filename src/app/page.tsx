"use client";

import React from 'react';
import EntryList from './components/EntryList';
import './page.css';
import Navbar from './components/Navbar';
import ChampCreation from './components/ChampCreation';
import BigButtonComponent from './components/BigButtonComponent';
import videoSrc from './assets/video/worlds2023video.mp4';


function Page() {
  return (
    <div className="App bg">
      <video src={videoSrc} autoPlay loop controls/>
      <Navbar />
      <BigButtonComponent />
    </div>
  );
}

export default Page;
