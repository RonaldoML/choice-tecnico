const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = 4000;

    this.routes();
  }

  routes() {
    this.app.use('/files', require('../routes/files'));

    this.app.get('/', (_, res) => {
      res.send('Hello World!')
    });

  }

  listen() {
    this.app.listen(
      this.port,
      () => console.log('App is listening on port: ', this.port)
    );
  }
}

module.exports = Server;

