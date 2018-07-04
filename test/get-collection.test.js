"use strict";

const expect = require('chai').expect;
const request = require('request');

require('../config');
const getCollection = require('../src/scripts/get-collection');

describe('Get collection from Mongo', function () {
   it('Should return the user details from DB', function (done) {
        this.timeout(6000);
        
        getCollection.getUsers('NSE India', function (err, res) {
            expect(res).to.have.lengthOf.above(0);
            done();
        });
    });
});