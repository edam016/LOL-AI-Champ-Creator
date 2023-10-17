"use client";

import React, { useState } from 'react';
import './EntryList.css';

interface Entry {
  id: number;
  title: string;
  content: string;
}

const EntryList = () => {
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: 1,
      title: 'Sample Entry 1',
      content: 'This is the content of sample entry 1.',
    },
    {
      id: 2,
      title: 'Sample Entry 2',
      content: 'This is the content of sample entry 2.',
    },
  ]);

  const addEntry = () => {
    const newEntry: Entry = {
      id: entries.length + 1, 
      title: 'New Entry',
      content: 'This is a new entry added below.',
    };

    setEntries((prevEntries) => prevEntries.concat(newEntry));
  };

  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <div key={entry.id} className="entry">
          <h2 className="entry-title">{entry.title}</h2>
          <p className="entry-content">{entry.content}</p>
          <div className="entry-actions">
            <button className="entry-action">Upvote</button>
            <button className="entry-action">Downvote</button>
          </div>
        </div>
      ))}

      <button onClick={addEntry}>Add New Entry</button>
    </div>
  );
}

export default EntryList;
