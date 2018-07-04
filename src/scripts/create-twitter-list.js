"use strict";
require('../../config');

const Twitter = require('twitter');
const T = new Twitter(JSON.parse(process.env.twitter_key));

function createTwitterList(list_name, callback) {
    let params = {
        name : list_name
    };
    T.post('lists/create', params, function (err, res, response) {
        if (err) throw err;
        callback(null, res);
    });
}

module.exports = {
    createTwitterList
}