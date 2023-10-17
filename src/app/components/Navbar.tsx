// Navbar.tsx

import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import leagueLogo from '../assets/graphics/lol-logo.svg'
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="lol-logo.png" alt="League of Legends Logo" /> */}
      </div>

      <div>
      <Image src={leagueLogo} alt={''} height={30}/>
      </div>
      <div className="champ-creator">
        League of Legends AI Champ Creator
        </div>
        <div className="social-button">
        <a href="https://github.com/edam016" target="_blank" rel="noopener noreferrer">
          <button><GitHub /></button>
        </a>
        <a href="https://www.linkedin.com/in/eric-dam-62589b158/" target="_blank" rel="noopener noreferrer">
          <button><LinkedIn /></button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
