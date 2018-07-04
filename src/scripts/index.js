"use strict";

const getCollection = require('./get-collection');
const twitterList = require('./create-twitter-list');
const addUsers = require('./add-users-to-list');

function startAdding(collection_name){
    let collection = collection_name;
    getCollection.getUsers(collection, (err, res) => {
        if (err) throw err;
        let users = res;
        let collectionName = collection;
    
        twitterList.createTwitterList(collectionName, (err, res) => {
            if (err) throw err;
            
            let listId = res.id_str;
            console.log(`List created with Id ${listId}`);
    
            let usersArray = getUsersArray(users);
            
            addUsers.addUsersToList(listId, usersArray, (err, res) => {
                if (err) throw err;
                console.log('Successfully created list and added users.');
            });
        });
    });
}

module.exports = startAdding;

function getUsersArray(usersObj){
    let usersArray = [];
    usersObj.forEach((user)=>{
        usersArray.push(user.id_str);
    });
    return usersArray;
}