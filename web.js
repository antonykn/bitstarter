var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    // set up file system;
    var fs = require('fs'); 

    // read index.html into buffer;  
    var buffer = new Buffer(fs.readFileSync('index.html'),'utf-8');
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen( console.log("Listening on " + port);
});port, function() {
