var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Welcome to AltCampus</h1>");
}

server.listen(8000, () => {
  console.log("server listening on port 8000");
});
