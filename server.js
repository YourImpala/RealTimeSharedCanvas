const express = require('express');
const app = express();
const socket = require('socket.io');
const port = 3000;

const server = app.listen(port);
app.use(express.static('public'));

const io = socket(server);

io.on('connection', socket => {
    //receives data from the client
    socket.on('data', data => {
        //send coordinates to another clients
        socket.broadcast.emit('data', data);
    });
});

console.log(`Server starting on port ${port}`);