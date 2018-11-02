var http=require('http')

http.createServer(function (require,response){
    response.writeHead(200,{'Content-Type':'text-plain'});

    response.end('Hello World!');
}).listen(8888);

console.log('this server is running at http://localhost:8888');