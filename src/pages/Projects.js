import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Import components from submodules
import TradingDashboard from '../../trading-dashboard/src/App';
import FinancialModelling from '../../financial-modelling/src/App';

const Projects = () => {
    const projects = [
        {
            title: 'Trading Dashboard',
            description: 'A real-time trading dashboard with market analysis tools and portfolio tracking.',
            thumbnail: '/images/trading-dashboard-thumb.jpg', // You'll need to add this image
            component: TradingDashboard
        },
        {
            title: 'Financial Modelling',
            description: 'Advanced financial modelling tools for investment analysis and decision making.',
            thumbnail: '/images/financial-modelling-thumb.jpg', // You'll need to add this image
            component: FinancialModelling
        },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        thumbnail={project.thumbnail}
                        component={project.component}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
