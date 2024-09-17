const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
    // res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })

    socket.on('disconnect', () => {
        console.log('a User disconnected')
    })
})


// app.listen(3000, () => { // will not work
server.listen(3000, () => {
    console.log(`server listing at http://localhost:3000`)
})