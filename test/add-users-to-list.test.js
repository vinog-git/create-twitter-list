"use strict";

const expect = require('chai').expect;
const mod = require('../src/scripts/add-users-to-list');

describe('Add users to list', function(){
    let modRes;

    this.beforeAll(function(done){
        this.timeout(5000);
        mod.addUsersToList('1231231231',[1,2,3], function(err, res){
            modRes = res;
            done();
        });
    });

    it('Add users to the created list', function(){
        expect(modRes).to.be.not.null;
    });
});
