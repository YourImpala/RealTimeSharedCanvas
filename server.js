const express = require('express');
const app = express();
const socket = require('socket.io');
const port = 3000;

const server = app.listen(port);
app.use(express.static('public'));

const io = socket(server);
//canvas data storage
let canvasData = [];
io.on('connection', socket => {
    console.log(`New connection : ${socket.id}`)
    //sends canvas data to all new connections
    io.sockets.emit('canvasData', canvasData);
    //receives data from the client
    socket.on('data', data => {
        canvasData.push(data);
        //send coordinates to another clients
        socket.broadcast.emit('data', data);
    });
});

console.log(`Server starting on port ${port}`);