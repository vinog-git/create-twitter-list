"use strict";

require('./config');
const server = require('http').createServer();
const startAdding = require('./src/scripts/index');

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server bound at ${PORT}`));

let collection_name = process.argv[2];

startAdding(collection_name);