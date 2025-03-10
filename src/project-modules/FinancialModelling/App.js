import React from 'react';
import FinancialModellingApp from '../../../FinancialModelling/frontend/src/App';

// This wrapper component allows us to add any necessary configuration or state management
const FinancialModellingWrapper = () => {
    return (
        <div className="financial-modelling-wrapper">
            <FinancialModellingApp />
        </div>
    );
};

export default FinancialModellingWrapper; 