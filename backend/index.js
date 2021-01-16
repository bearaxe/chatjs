const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3080;
const frontendDir = '../frontend/dist';

app.use(express.static(path.join(__dirname, frontendDir)));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + frontendDir + '/index.html'));
});

const server = http.listen(port, function() {
  console.log(`listening on *:${port}`);
});