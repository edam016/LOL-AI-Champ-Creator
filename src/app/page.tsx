"use client";

import React from 'react';
import EntryList from './components/EntryList';
import './page.css';
import Navbar from './components/Navbar';
import ChampCreation from './components/ChampCreation';
import BigButtonComponent from './components/BigButtonComponent';
import videoSrc from './assets/video/test.mp4';


function Page() {
  return (
    <div className="App bg">
      <link rel="preload" href="src/app/assets/images/splash/ziggs-bg.jpg" as="image"></link>
      <video src={videoSrc} autoPlay loop/>
      <div className='content'>
        <Navbar />
        <BigButtonComponent />
      </div>
    </div>
  );
}

export default Page;
