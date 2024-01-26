const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = 3000;

    this.routes();
  }

  routes() {
    this.app.get('/', (req, res) => {
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

