
// const express = require('express')
const path = require('path')
const compression = require('compression')
// const app = express()
// const http = require('http').server(app)
// const io = require('socket.io')(http)

var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

// send all requests to index.html
app.get('*', function (req, res) {
  console.log('rendering')
  res.sendFile(path.join(__dirname, 'public'))
})

// socket.io
io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  })
  // socket.on('disconnect', function(){
  //   console.log('user disconnected')
  // })
})

// production server, localhost:3000
// const PORT = process.env.PORT || 3000
// http.listen(PORT, function() {
//   console.log('Production Express server running at localhost:' + PORT)
// })
