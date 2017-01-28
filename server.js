'use strict';

let app = require('express')(),
    http = require('http').Server(app),
    port = 3005;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

http.listen(port, function () {
    console.log(`Server running at localhost:${port}`);
});


