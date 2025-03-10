import React from 'react';
import '../styles/global.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <div className="profile-section">
        <img
          src="/profile-picture.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h1>Welcome to my website</h1>
        <p>Explore my education, experience, interests, and recent projects.</p>
        
        <div className="social-links">
          <a href="https://github.com/SammySho" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sammyshorthouse" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
