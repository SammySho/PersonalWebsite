import React from 'react';
import '../styles/global.css';
import { FaGithub, FaEllipsisH } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Mineral Deep Dive',
    description: 'A weather application that displays current weather and forecasts using external APIs.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/SammySho/MineralDeepDive',
    live: 'https://sammyshorthouse.com/MineralDeepDive',
  },
  {
    title: 'Trading Strategy Dashboard',
    description: 'A CI/CD dashboard to visualise trading strategies, select signals and backtest them to predict performance.',
    technologies: ['Node.js', 'PostgreSQL', 'React', 'AWS', 'Python'],
    github: 'https://github.com/SammySho/FinancialModelling',
    live: 'https://trading.sammyshorthouse.com',
  }
];

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <p>Here are some projects I have worked on:</p>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaEllipsisH /> Explore Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
