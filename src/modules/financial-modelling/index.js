import React from 'react';
import './styles.css';

// Re-export the components we need
const FinancialModellingApp = () => {
    // We'll dynamically import the app to avoid the CRA restriction
    const [App, setApp] = React.useState(null);
    
    React.useEffect(() => {
        // Dynamic import of the actual app
        import('../../../FinancialModelling/frontend/src/App')
            .then(module => {
                setApp(() => module.default);
            })
            .catch(error => {
                console.error('Error loading Financial Modelling App:', error);
            });
    }, []);

    if (!App) {
        return <div>Loading Financial Modelling Dashboard...</div>;
    }

    return (
        <div className="financial-modelling-wrapper">
            <App />
        </div>
    );
};

export default FinancialModellingApp; 