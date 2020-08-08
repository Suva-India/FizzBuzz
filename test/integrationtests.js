const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const { expect } = chai;
const { describe, it } = mocha;
chai.use(chaiHttp);

describe('API Integration Tests', () => {
    it('accepts 1 as input param', (done) => {
        chai.request(app)
            .get('/api/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('fizzbuzzArray');
                done();
            });
    });
    it('returns an array of length 50 when request URL is /api/50', (done) => {
        chai.request(app)
            .get('/api/50')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.fizzbuzzArray).to.have.lengthOf(50);
                done();
            });
    });
    it('fails when request URL is /api/101 or request parameter count is greater than 100', (done) => {
        chai.request(app)
            .get('/api/101')
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).to.equal(
                    '"Expecting URL in the format /api/<<number>>, number must be between 1 and 100"'
                );
                done();
            });
    });
    it('fails when request URL is /api/abc or request parameter count is not an integer', (done) => {
        chai.request(app)
            .get('/api/abc')
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).to.equal(
                    '"Expecting URL in the format /api/<<number>>, number must be between 1 and 100"'
                );
                done();
            });
    });
});
