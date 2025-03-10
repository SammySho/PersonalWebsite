const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Allow imports from outside src directory
            webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
                (plugin) => !plugin.constructor.name === 'ModuleScopePlugin'
            );

            // Modify the rule that handles JavaScript files
            const jsRule = webpackConfig.module.rules.find(
                rule => rule.test && rule.test.test('.jsx')
            );

            if (jsRule) {
                // Modify the include path to also handle files from the FinancialModelling directory
                jsRule.include = [
                    webpackConfig.resolve.modules[1], // src directory
                    path.resolve(__dirname, 'FinancialModelling/frontend/src')
                ];
            }
            
            return webpackConfig;
        },
    },
    babel: {
        presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }]
        ]
    }
}; 