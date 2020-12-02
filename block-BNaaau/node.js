var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req, res);
  res.end("My first server in Node.js");
}

server.listen(5100, () => {
  console.log("My first server in Node.js");
});
