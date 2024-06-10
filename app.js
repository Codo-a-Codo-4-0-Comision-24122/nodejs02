const http = require("node:http");
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((request, response) => {

    const htmlFile = fs.readFileSync(__dirname + '/html/index.html');

    response.writeHead(
        200, {
        'Content-type': 'text/html; charset=UTF-8'
    });

    response.end(htmlFile);
});

server.listen(PORT, () => console.log("El servidor esta funcionadno en puerto: " + PORT));
