import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Import components from FinancialModelling
import FinancialModellingApp from '../modules/financial-modelling';

const Projects = () => {
    const projects = [
        {
            title: 'Financial Modelling',
            description: 'Advanced financial modelling tools for investment analysis and decision making, featuring backtesting capabilities and strategy visualization.',
            thumbnail: '/images/financial-modelling-thumb.jpg',
            component: FinancialModellingApp
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
