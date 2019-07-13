//Dep Require
var express = require("express")
var app = express()
var logger = require("morgan");
var mongoose = require("mongoose");
const path = require('path');

//Set Up Express
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/musicApp"
mongoose.connect(mongoURI, { useNewUrlParser: true });

// API routes
require('./routes')(app);


// var piano = process.env.PUBLIC_URL + '/public/piano.js'

//production mode
if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  
app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}

//build mode
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

//Express Listen
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
