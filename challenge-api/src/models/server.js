const express = require('express');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');


const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Challenge API',
      version: '1.0.1',
    },
    servers: [
      {
        url: 'http://localhost:{port}',
        description: 'Development server',
        variables: {
          port: {
            enum: [
              4000
            ],
            default: 4000
          }
        }
      }
    ]
  },
  apis: [
    `${path.join(__dirname, "../routes/files.js")}`
  ],
}

class Server {

  constructor() {
    this.app = express();
    this.port = 4000;

    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(
      '/api-doc',
      swaggerUI.serve,
      swaggerUI.setup(
        swaggerJsDoc(
          swaggerSpec
        )));

  };

  routes() {
    this.app.use('/files', require('../routes/files'));

    this.app.get('/', (_, res) => {
      res.send('Hello World!')
    });

  };

  listen() {
    this.app.listen(
      this.port,
      () => console.log('App is listening on port: ', this.port)
    );
  };
};

module.exports = Server;

