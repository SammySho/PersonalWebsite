import React, { useState, useCallback, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, thumbnail, component: ProjectComponent }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Handle body scroll lock
    useEffect(() => {
        if (isExpanded) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isExpanded]);

    // Use useCallback to prevent unnecessary re-renders
    const handleExpand = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(true);
    }, []);

    const handleClose = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(false);
    }, []);

    const handleOverlayClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            setIsExpanded(false);
        }
    }, []);

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                setIsExpanded(false);
            }
        };

        if (isExpanded) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isExpanded]);

    return (
        <>
            <div className="project-card">
                <div className="project-card-preview">
                    <div className="project-card-image">
                        <img src={thumbnail} alt={title} className="project-thumbnail" />
                    </div>
                    <div className="project-card-info">
                        <h3>{title}</h3>
                        <p className="project-description">{description}</p>
                        <button 
                            className="expand-button"
                            onClick={handleExpand}
                            aria-label="Expand project"
                        >
                            View Project <FaChevronDown />
                        </button>
                    </div>
                </div>
            </div>
            
            {isExpanded && (
                <div className="project-window-overlay">
                    <div 
                        className="project-window"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="project-window-header">
                            <h2>{title}</h2>
                            <button 
                                className="close-button"
                                onClick={handleClose}
                                aria-label="Close project window"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className="project-window-content">
                            {ProjectComponent && <ProjectComponent />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard; 