const chai = require('chai');
const chaiHttp = require('chai-http');

const Server = require('../../models/server');


chai.use(chaiHttp);


describe('Files', () => {



  describe('/GET files', () => {
    it('it should GET all the processed files', (done) => {
      chai.request(Server)
        .get('/files/data')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('file');
          done();
        });
    });

    it('it should GET a processed file', (done) => {
      chai.request(Server)
        .get('/files/data?fileName=test9.csv')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('file');

          done();
        });
    });

    it('it should not find a file', (done) => {
      chai.request(Server)
        .get('/files/data?fileName=test.csv')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('file');
          done();
        });
    });



    it('it should GET the original list', (done) => {
      chai.request(Server)
        .get('/files/file')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('file');
          done();
        });
    });
  });

});
