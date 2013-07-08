var express = require('express');

var app = express.createServer(express.logger());

var getFileContent = function(fileName) {
  return   fs.readFileSync(fileName,'utf-8');
};

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(getFileContent('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
