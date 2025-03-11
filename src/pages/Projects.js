import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Import components from FinancialModelling
import FinancialModellingApp from '../modules/financial-modelling';

// Demo component with Lorem Ipsum content
const DemoProject = () => (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h3>Project Overview</h3>
        <p>This is a demonstration of the project card's scrolling functionality with Lorem Ipsum content.</p>
        
        <h4>Features</h4>
        <ul>
            <li>Responsive Design</li>
            <li>Interactive Components</li>
            <li>Data Visualization</li>
            <li>Real-time Updates</li>
        </ul>

        <h4>Technical Details</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h4>Implementation</h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h4>Architecture</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <h4>Performance Metrics</h4>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        
        <h4>Implementation</h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h4>Architecture</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <h4>Performance Metrics</h4>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

        <h4>Implementation</h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h4>Architecture</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <h4>Performance Metrics</h4>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

        <h4>Future Enhancements</h4>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

        <h4>Conclusion</h4>
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: 'Financial Modelling',
            description: 'A CI/CD pipeline for pulling stock data from Yahoo Finance, selecting a model and trading signals, backtesting the model, and visualising the results.',
            thumbnail: '/images/stonks.png',
            component: FinancialModellingApp
        },
        {
            title: 'Interactive Data Visualization',
            description: 'A deep dive into understanding price fluctuations of rare earth minerals using alternative data sources.',
            thumbnail: '/images/stonks.png', // You'll need to add this image
            component: DemoProject
        }
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
