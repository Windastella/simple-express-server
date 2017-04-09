#!/usr/bin/env node

var option = require('commander');

option
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-p, --port <n>', 'Set Port Number',(val)=>{return val}, 8000)
  .option('-h, --host <s>', 'Set Host Address',(val)=>{return val}, 'localhost')
  .option('-t, --test', 'Testing build')
  .parse(process.argv);

var express = require('express');
var fs = require('fs');

var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

///////////////////////
//  Http Server Code //
///////////////////////
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    console.log('GET /');

    res.writeHead(200, {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});

    res.end('thanks');
});

app.post('/', function(req, res){
    console.log('POST /');

    res.writeHead(200, {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});

    res.end('thanks');
});

app.listen(option.port, option.host);
console.log('Listening at http://'+ option.host + `:` + option.port);
