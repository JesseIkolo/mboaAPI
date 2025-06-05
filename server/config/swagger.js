const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

// Charger le fichier swagger.yaml
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const options = {
    swaggerDefinition: swaggerDocument,
    apis: ['../routes/*.js'], // chemin vers les fichiers de routes
};

const specs = swaggerJsdoc(options);

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(specs, {
        explorer: true,
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "Mboa Events API Documentation",
        customfavIcon: "/assets/favicon.ico"
    })
}; 