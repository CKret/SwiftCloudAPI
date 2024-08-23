const swaggerAutogen = require('swagger-autogen')();

const doc = {
    "info": {
        "version": "0.0.1",
        "title": "SwiftCloud API",
        "description": "A fabulous API to settle your cravings for Taylor Swift music statistics!"
    },
    "host": "localhost:6220",
    "schemes": [
        "http"
      ]
    };

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);
