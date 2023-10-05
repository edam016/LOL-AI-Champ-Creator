"use client";

import React from 'react';
import EntryList from './EntryList';
import './page.css';
import Navbar from './Navbar';
import ChampCreation from './ChampCreation';
import BigButtonComponent from './BigButtonComponent';

function Page() {
  return (
    <div className="App">
      <Navbar />
      <BigButtonComponent />
    </div>
  );
}

export default Page;
