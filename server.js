var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.write("1 - 1 is " + (1-1));
  response.end();
}).listen(8887);