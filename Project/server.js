var http = require('http');
var express = require('express');
/*********************************************************
 *  Configuration
 *********************************************************/

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Allow CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Db connection settings
var mongoose = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var db = mongoose.connection;

/*********************************************************
 *  WEB SERVER FUNCTIONALITY
 *********************************************************/
app.get('/', function(req,res){
    console.log("Request on root page");
    res.send("Hello World");
});

app.get("/about", function(req, res){
    res.send("I'm Eli.");
})



/*********************************************************
 *  API FUNCTIONALITY
 *********************************************************/

    var catalog = [];
    var ItemDB; //This is model for DB items

    app.get('/API/catalog', function(req, res){
        res.json(catalog);
    });

    app.post('/api/items', function(req, res){
        var item = req.body;
        var itemForMongo = ItemDB(item);
        itemForMongo.save();

        res.json(item);
    });

/** Start the server and DB check connection */
db.on('open', function() {
    console.log('Yeeei, connecte to DB');

        /*
        Data types allowed for schemas:
        String, Number, Date, Buffer, Boolean, ObjectId, Array
    */


    var itemSchema = mongoose.Schema({
        code: String,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        user: String,

    });

    // create obj constructor
    ItemDB = mongoose.model('itemsMB7', itemSchema);
});

db.on('error', function(details){
    console.log("Error: DB connection error");
    console.log("Error details: " + details);
});


app.listen(8080, function(){
    console.log("Server running at localhost:8080");
})