"use client";

import React from 'react';
import EntryList from './EntryList';
import './page.css';
import Navbar from './Navbar';

function Page() {
  return (
    <div className="App">
      <Navbar />
      <EntryList />
    </div>
  );
}

export default Page;
