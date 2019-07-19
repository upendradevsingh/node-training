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
        '/feeds': function (req, res) {
            var options = {
                "method": "GET",
                "hostname": "newsapi.org",
                "port": null,
                "path": "/v2/everything?q=bitcoin&from=2019-06-16&sortBy=publishedAt&apiKey=05bbf6ddb763471d967af9372905c920",
                "headers": {
                    "cache-control": "no-cache",
                    "postman-token": "3f699616-ccec-89a2-50ae-bfce8ddf23c6"
                }
            };
            const apiRequest = http.request(options, function (response) {
                var chunks = [];

                response.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                response.on("end", function () {
                    var body = Buffer.concat(chunks);
                    res.write(body.toString());
                    res.end();
                });
            });

            apiRequest.end();
        }
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