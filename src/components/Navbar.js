import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
