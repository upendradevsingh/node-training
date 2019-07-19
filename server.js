const http = require('http');

function sayHello() {
    console.log('Hello All');
}

const server = http.createServer((req, res) => {
    sayHello();
    res.write('Welcome to node.js world!');
    res.end();
});

server.listen(1111, (err) => {
    if (err) console.log(err);
    console.log('Node server listening to port 1111')
});