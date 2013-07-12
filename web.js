//var express = require('express');

//var app = express.createServer(express.logger());

//app.get('/', function(request, response) {

//  response.send('Hello World 2!');
//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});

var content;

fs.readFileSync('./Index.html', function read(err, data) {
   if (err) {
      throw err;
   }
   content = data;
});
console.log(content);
