import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cv" className="nav-link">Curriculum Vitae</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <a href="https://trading.sammyshorthouse.com" className="nav-link">Stock Dashboard</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
