var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        if(pathname != '/favicon.ico'){
            //request.setEncoding("utf8");
            
            /*request.addListener("data", function(postDataChunk){
                postData += postDataChunk;
                console.log("Received POST data chunk: " + postDataChunk);
            });
            
            request.addListener("end", function(){
                console.log("Request received for " + pathname + ".");
                route(handle, pathname, response, postData);
            })*/
            route(handle, pathname, response, request);
        }
    }
    
    http.createServer(onRequest).listen(8887);
    console.log("Server has started");
}

exports.start = start;