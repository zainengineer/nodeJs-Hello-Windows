var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

//
//var url = require('url');
//var url_parts = url.parse(request.url, true);
//var query = url_parts.query;