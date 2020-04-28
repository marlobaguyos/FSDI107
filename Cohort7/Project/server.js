var http = require('http');
var express = require('express');


/*******************************************************
 *  Configuration section
********************************************************/
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


/*******************************************************
 *  Web Server Functionality
********************************************************/

app.get('/', function(req, res){
    console.log("Req on root page");
    res.send("<h1 style='color:red;'>Hello World!</h1>");
});

app.get('/about', function(req, res){
    res.send("I'm Marlo Baguyos");
});

app.listen(8080, function() {
    console.log("Server running at localhost:8080");
});

/*******************************************************
 *  API functionality
********************************************************/
var catalog = [];



app.get('/API/catalog', function(req, res){
    var data = [];
    res.json(data);
})

app.post('/api/item', function(req, res){
    console.log(' Admin wants to save an item')

    var item = req.body;
    console.log(item);

    item.id = catalog.length + 1;
    catalog.push(item);

    res.json(item);
});