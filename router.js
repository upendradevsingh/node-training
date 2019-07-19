const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { path } = url.parse(req.url, true);
    console.log(path === '/');
    const routes = {
        '/': function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('This is index route');
            res.end();
        },
        '/training': function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('This is a training route');
            res.end();
        },
        // '/training/:id': function (req, res) {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write('This is a nodejs training route');
        //     res.end();
        // }
    };

    const defaultRoute = (req, res) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('No route found');
        res.end();
    }

    const routeHandler = routes[path] || defaultRoute;

    routeHandler(req, res);

});

server.listen(1111, (err) => {
    if (err) console.log(err);
    console.log('Node server listening to port 1111')
});