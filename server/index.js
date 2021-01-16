const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

const server = http.listen(8080, function() {
  console.log('listening on *:8080');
});