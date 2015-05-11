var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Echo Server");
});

 // return an object containing the request headers
app.get('/headers', function(request, response){
  
  response.json({
      headers: request.headers
    });
   // var first = request.params.firstname;
   // var last = request.params.lastname;
    //response.send(["Hello", first, last].join(" "));
});

// returns a string containing the contents of the specified header
app.get('/headers/:header_name', function(request, response){
    response.json({
      headername: request.url
    });
   // var first = request.params.firstname;
   // var last = request.params.lastname;
    //response.send(["Hello", first, last].join(" "));
});
  
// returns a string containing the http version
app.get('/version', function(request, response){
   var version = request.httpVersion;
    response.json({
      version: version
    });
   // var first = request.params.firstname;
   // var last = request.params.lastname;
    //response.send(["Hello", first, last].join(" "));
});

//});

app.listen(8080);