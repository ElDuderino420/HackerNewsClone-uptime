const express = require('express');
const path = require('path');
const http = require('http');
const request = require('request');

const app = express();
const server = http.createServer(app);

server.listen('3001', function(err){
    if(err){
        console.log("Can't connect server");
    } else {
        console.log("Listening on port: 3000");                
    }
});

app.get('/', function(req, res){
    res.send("Uptime Monitor");
});

app.get('/status', function(req, res){
    
    // send request
    request('http://188.226.152.93:3000/', function (error, response, body) {
        // Website is up
        if (!error && res.statusCode === 200) {
            console.log("200 OK!");
            res.send("Alive");
        }

        // No error but website not ok
        else if (!error) {
            console.log(res.statusCode);
            res.send("Alive");
        }

        // Loading error
        else {
            console.log(error);
            res.send("Down");
        }
    });

    //res.send(status);
});