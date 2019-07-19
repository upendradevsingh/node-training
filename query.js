const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { query } = url.parse(req.url, true);
    console.log(query);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`Welcome to ${query.q} world!`);

    res.end();
});

server.listen(1111, (err) => {
    if (err) console.log(err);
    console.log('Node server listening to port 1111')
});