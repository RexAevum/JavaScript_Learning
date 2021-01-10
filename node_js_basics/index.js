/* Create an app to load webpages */
const http = require('http');
const path = require('path');
const fs = require('fs');

// create a server
const server = http.createServer((req, res) => {
    // --------------------FIXME - if only using js------------------------------------
    // console.log(req.url); // the path if on local host
    // //
    // if (req.url === '/'){
    //     // read an html file
    //     fs.readFile(path.join(__dirname, '/public', 'index.html'), (err, data) => {
    //         if (err) throw err;
    //         // write to header to make it an html file
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(`<h1>Home</h1>`);
    //     });

    // }
    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, '/public', 'about.html'), (err, data) =>{
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type' : 'text/html'});
    //         res.end(data);
    //     });
    // }
    // if (req.url === '/api/users'){
    //     // create an array of 
    //     const users = [
    //         { name: 'Bob Sagget', age: 40 },
    //         { name: 'Carrol Smith', age: 28}
    //     ];
    //     res.writeHead(200, {'Content-Type' : 'application/json'});
    //     res.end(JSON.stringify(users));

    // }
    //---------------------------------------------------------------------------------------------
    // 
    // Build a file path
    let filePath = path.join(
        __dirname,
        '/public',
        req.url === '/' ? 'index.html' : req.url
    );
    
    // Extensions of the file - get the extension of the file that gets requested
    let extname = path.extname(filePath);

    // Set inital content type
    let contentType = 'text/html';

    //Check extension and set content type using a switch
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) =>{
        if (err){
            if (err.code == 'ENOENT'){ // ENOENT --> page not found
                fs.readFile(path.join(__dirname, '/public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf-8');
                });
            }else{
                // Some server error
                res.writeHead(500);
                res.end(`Server error: ${err}`);
            }
        }else{
            // No errors
            res.writeHead(200, {'Content-Type' : contentType }); // pass whatever content type the requested file has
            res.end(content, 'utf-8');
        }
    });
});

// set the port
// will set to whatever the port available on the host or default to 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
// 