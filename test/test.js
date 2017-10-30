'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../index').app;

chai.use(chaiHttp);

describe('api', () => {

    describe('name', () => {
        it('should return name', done => {
            chai
                .request(server)
                .get('/?name=test')
                .end((err, res) => {
                    expect(res.body.success).to.equal(true);
                    done();
                });
        });
        it('should not return name', done => {
            chai
                .request(server)
                .get('/')
                .end((err, res) => {
                    expect(err).to.not.equal(null);
                    expect(err.response.text).to.equal(
                        'Name cant be empty'
                    );
                    done();
                });
        });

    });
});

