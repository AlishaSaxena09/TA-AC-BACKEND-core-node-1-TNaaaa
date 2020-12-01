var http = require('http');
var server = http.createServer(handleRequest)
function handleRequest(req, res) {
    res.statusCode = 201;
    res.setHeaders('Content-Type', 'text/html');
    res.end('<h1> Welcome !</h1>');
}

server.listen(4444, () => {
    console.log('server listening on port 3000')
})