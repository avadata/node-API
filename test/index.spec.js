const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

describe('Test the app server', () => {
    it('it should GET welcome message', (done) => {
        chai.request('http://localhost:8085')
            .get('/hello-to-api')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.message.should.be.eql('Welcome to node API services !');
                done();
            });
    });
});
