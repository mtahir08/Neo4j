var neo4j = require('node-neo4j');
db = new neo4j('http://neo4j:123@localhost:7474');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
