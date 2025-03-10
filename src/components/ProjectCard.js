import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, thumbnail, component: ProjectComponent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
            <div className="project-card-content" onClick={() => setIsExpanded(!isExpanded)}>
                <img src={thumbnail} alt={title} className="project-thumbnail" />
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <button className="expand-button">
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
            
            {isExpanded && (
                <div className="project-window-overlay" onClick={(e) => {
                    if (e.target === e.currentTarget) setIsExpanded(false);
                }}>
                    <div className="project-window">
                        <button 
                            className="close-button"
                            onClick={() => setIsExpanded(false)}
                        >
                            ×
                        </button>
                        <div className="project-window-content">
                            {ProjectComponent && <ProjectComponent />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard; 