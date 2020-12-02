var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.writeHead(202, {
    "Content-Type": "text/plain",
  });
  res.end("<h1>welcome</h1>");
}

server.listen(3333, () => {
  console.log("server listening on port 3333");
});
