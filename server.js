//js file
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

var db = new Db('users', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
  assert.equal(null, err);

  db.on('close', test.done.bind(test));
  db.close();
});


var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());

var jsonn = {'name':'<h1>hello</h1>'};

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('<h1>hello world</h1>');
});
app.get('/about', function (req, res) {
  res.sendfile('waypoint.html');
});
app.get('/contact', function (req, res) {
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>Euro 2012 teams</h1>\n' + 
    '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' + 
    '\n\n');
  res.end();
});

app.listen('1234');