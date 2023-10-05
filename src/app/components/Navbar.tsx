// Navbar.tsx

import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="lol-logo.png" alt="League of Legends Logo" /> */}
      </div>
      {/* <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Champions</a></li>
          <li><a href="#">Create</a></li>
        </ul>
      </div> */}
      <div className="champ-creator">League of Legends Champ Creator</div>
    </nav>
  );
};

export default Navbar;
