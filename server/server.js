//Dep Require
var express = require("express")
var app = express()
var logger = require("morgan");
var mongoose = require("mongoose");
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