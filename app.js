const http = require("node:http");

const PORT = 3000;

const server = http.createServer( (request, response) =>{
    response.writeHead(
        200, {
            'Content-type': 'text/plain'
        });
    
    response.end('Hola Mundo');
});

server.listen(PORT, () => console.log("El servidor esta funcionadno en puerto: " + PORT));
