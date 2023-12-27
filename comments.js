// Create web server
// Create a web server that can respond to requests for / and /about, as well as any other path.
// Make sure you create a separate module for the /about route and require it in the main file.
// The about module should export a function that returns a string with some fun facts about yourself.
// Bonus: create a /random route that responds with a random fact about yourself.

var http = require('http');
var about = require('./about');

http.createServer(function(req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(about());
  } else if (req.url === '/random') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Random fact: ' + Math.random());
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found\n');
  }
}).listen(3000, '