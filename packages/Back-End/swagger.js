const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//metadata info about the API
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Rentify API',
            version: '1.0.0',
            description: 'API for the application',
        }
    },
    apis: ['./routes/*.js']
};
//docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

/// Function to set up the swagger documentation
const swaggerDocs = (app,port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Swagger documentation running on http://localhost:${port}/api-docs`);
}
module.exports = {swaggerDocs};