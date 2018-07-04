"use strict";

const expect = require('chai').expect;
const request = require('request');
const server = require('../server');

describe('Server is started', function () {
    let url = 'http://localhost:3000/'
    it('Should return 200 Ok', function () {
        request(url, function (err, res, body) {
            expect(res.statusCode).to.equal(200);
        });
    })
});