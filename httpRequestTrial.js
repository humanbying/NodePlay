var http = require("http");

http.createServer( function(request, response) {

  let x = 25;

  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.write('Welcome to Node\n');
  response.write('This is my trial to get an HTTP server going\n');
  response.write(`${x}`);

  response.end();

}).listen(8000);


console.log('Server Started');
