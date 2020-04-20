const express = require("express"); //build the resp APIs
const bodyParser = require("body-parser"); //parses the request and creates the req. body object
const cors = require("cors"); //express Middleware to enable CORS w several options
const http = require("http"); //HTTP server functionalities
const path = require('path'); //utilities for working with file and directory path
const fs = require('fs'); //work with the file system: read and write files back
const xmlParse = require('xslt-processor').xmlParse; //This module allows us to work with XML files
const xsltProcess = require('xslt-processor').xsltProcess; //The same module allows us to utilise XSL Transformations
const xml2js = require('xml2js'); //This module does XML to JSON conversion and also allows us to get from JSON back to XML

const app = express(); // setting the routing to be handled by Express
let server = http.createServer(app); //This is where our server gets created

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content type - app/JSON
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BlackBooks Bookstore application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});