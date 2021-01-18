const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const { SERVER_PORT, CLIENT_PORT } = require('../config.json');
// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:8080',
//     //methods: ['GET', 'POST'],
//     credentials: true,
//   },
//   //transports: ['websocket', 'polling']
// });
// shotgun, for now
var io = require('socket.io')(http, {
  cors: {
    origin: [`http://localhost:${SERVER_PORT}`, `http://localhost:${CLIENT_PORT}`],
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin"],
    credentials: true
  }
})
// const port = 3080;
const frontendDir = '../frontend/dist';

// CORS strikes again.
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//   next();
// });

// app.use(express.static(path.join(__dirname, frontendDir)));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + frontendDir + '/index.html'));
// });


io.sockets.on('connection', function(socket) {
  console.log('connecting')
  socket.on('username', function(username) {
      socket.username = username;
      console.log('caught the data', socket.username);
      io.emit('is_online', {user: socket.username});
  });

  socket.on('disconnect', function(username) {
      io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  })

  socket.on('chat_message', function(message) {
      io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });
});

const server = http.listen(SERVER_PORT, function() {
  console.log(`listening on *:${SERVER_PORT}`);
});