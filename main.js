var express = require('express');
var app = express();
const Path = require('path');

app.get('/', function (req, res) {
  res.sendFile(Path.join(__dirname, 'index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});