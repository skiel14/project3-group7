//Dep Require
var express = require("express")
var app = express()
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors")
const path = require('path');

//Set Up Express
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

// Connect to the Mongo DB
var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/musicApp"
mongoose.connect(mongoURI, { useNewUrlParser: true });

// API routes
require('./routes')(app);

//CORS?
var whitelist = [
    'http://0.0.0.0:3000',
    'http://localhost:3000',
    'http://0.0.0.0:8080',
    'http://localhost:8080'
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
