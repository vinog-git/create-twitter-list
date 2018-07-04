"use strict";

const expect = require('chai').expect;
const mod = require('../src/scripts/create-twitter-list');

describe('Create Twitter list', function(){
    let modRes;

    this.beforeAll(function(done){
        this.timeout(5000);
        mod.createTwitterList('NSE India', function(err, res){
            modRes = res;
            done();
        });
    });

    it('Should have a collection name (string) and a list of users (Array)', function(){
        expect(modRes).to.be.not.null;
    });
});
