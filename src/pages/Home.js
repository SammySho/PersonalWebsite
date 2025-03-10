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
        <h1>Hi! I'm Sammy</h1>
        <p>I'm a PhD student in Engineering Mathematics at the University of Bristol, working on developing computer vision models for the predictive modelling of brain organoid development.</p>
        <p>Have a look at my education, experience, interests, and some of my recent projects using the links above, feel free to reach out if you'd like to chat!</p>
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
