const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

const express = require('express')
const app = express()

app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000)
