/* Creating a server */
const http = require('http');

// Creata a server object
http.createServer((reqest, response) => {
    // Write the response
    response.write('Hello Worlds');
    response.end();
// .listen (port, function())
}).listen(5000, () => console.log('Server running...'));