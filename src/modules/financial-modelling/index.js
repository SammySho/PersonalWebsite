import React, { useState, useEffect } from 'react';
import './styles.css';

// Re-export the components we need
const FinancialModellingApp = () => {
    const [App, setApp] = React.useState(null);
    
    useEffect(() => {
        // Dynamic import using the symlinked path
        import('../../external-projects/financial-modelling/App')
            .then(module => {
                setApp(() => module.default);
            })
            .catch(error => {
                console.error('Error loading Financial Modelling App:', error);
            });
    }, []);

    if (!App) {
        return (
            <div className="financial-modelling-wrapper">
                <div className="loading">Loading Financial Modelling Dashboard...</div>
            </div>
        );
    }

    return (
        <div className="financial-modelling-wrapper">
            <App />
        </div>
    );
};

export default FinancialModellingApp; 