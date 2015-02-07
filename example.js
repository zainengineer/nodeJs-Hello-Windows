var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World \n <br/>");
    response.write(getCurrentDateString());
    response.end();
}
function getCurrentDateString(){
    var currentDate;
    currentDate = new Date();
    var separator = '<b>:</b>';
    var dateString = 'time is ' + currentDate.getHours() + separator + currentDate.getMinutes()
       + separator + currentDate.getSeconds() + separator + currentDate.getMilliseconds();
    return dateString;
}

http.createServer(onRequest).listen(8888);

//
//var url = require('url');
//var url_parts = url.parse(request.url, true);
//var query = url_parts.query;

console.log("Server has started on port 8888. Try http://localhost:8888")