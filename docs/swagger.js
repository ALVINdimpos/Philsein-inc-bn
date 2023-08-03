const swaggerJSDoc = require('swagger-jsdoc');
const env = require('dotenv');

env.config();

const swaggerServer = process.env.SWAGGER_SERVER;

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Philsein Inc',
      version: '1.0.0',
      description: 'Philsein Inc API',
    },
    servers: [{ url: swaggerServer }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./docs/*.js', './docs/*.json', './docs/*.yml'],
};

const Swagger = swaggerJSDoc(options);

module.exports = Swagger;