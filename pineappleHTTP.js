let http = require("http");

http.createServer( function(request, response){

  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.write('Welcome to node\n');
  response.end();



}).listen(8000);
console.log('Server Started');
