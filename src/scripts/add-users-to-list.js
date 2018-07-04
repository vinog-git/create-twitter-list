"use strict";
require('../../config');

const Twitter = require('twitter');
const T = new Twitter(JSON.parse(process.env.twitter_key));

function addUsersToList(list_id, usersArray, callback) {
    console.log(usersArray.length);
    do {
        let users = usersArray.splice(0, 100);
        console.log(`Adding ${users.length} users`);
        let params = {
            list_id: list_id,
            user_id: users.join(',')
        };
        T.post('lists/members/create_all', params, function (err, res, response) {
            if (err) throw JSON.stringify(err);
        });
    } while (usersArray.length > 0);
    callback(null, 'done');
}

module.exports = {
    addUsersToList
}