var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var getFileContent = function(fileName) {
  return   fs.readFileSync(fileName,'utf-8');
};

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(getFileContent('index.html'));
  response.send(getFileContent('handshake01.jpg'));
//  response.send(getFileContent('index_local.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
