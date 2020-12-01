var http = require('http');
var server = http.createServer(handleRequest)
function handleRequest(req, res) {
    if(req.method == GET && req == '/'){
        res.setHeaders('Content-Type', 'text/html');
        res.write('<h1>Welcome to homepage</h1>')
    } else if (req.method == GET && req == '/about') {
        res.setHeaders('Content-Type', 'text/html');
        res.write('<h2>this is all about NodeJS</h2>')
    } else if (req.method == POST && req == '/about') {
        res.end('This is a post request');
    }
    
}

server.listen(4444, () => {
    console.log('server listening on port 3000')
})