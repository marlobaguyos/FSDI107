var http = require('http');
var express = require('express');

var app = express();

app.listen(8080, function() {
    console.log("Server running at localhost:8080");
});