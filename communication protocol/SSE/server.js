const express = require('express');


const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'Keep-alive');
    res.setHeader('Cache-Control', 'no-cache');
    res.flushHeaders();
    
    res.write('data: welcome to server send event \n\n')//

    const intervalId = setInterval(() => {
        res.write(`data: server time ${new Date().getSeconds()}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    })
})

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`)
})