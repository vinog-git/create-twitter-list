"use strict";

require('../../config');

const MongoClient = require('mongodb').MongoClient;

function getUsers(collection_name, callback) {
    const url = process.env.mongo_key;

    MongoClient.connect(url,{ useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        let dbo = db.db('twitter');
        dbo.collection(collection_name).find({}).toArray((err, res) => {
            if (err) callback(err);
            console.log(`Received ${res.length} records.`)
            callback(null, res);
        });
    });
}

module.exports = {
    getUsers
}