const fs = require('fs');
const path = require('path');

// Create folder
if (!fs.existsSync(path.join(__dirname, '/test'))){
    fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
        if (err) throw err;
        console.log('Folder created...');
    });
};

const f = path.join(__dirname, '/test/hello.html');
// Create and write to file
fs.writeFileSync(path.join(__dirname, '/test', 'hello.html'), '<html><body>Hello Workd!</bodyu></html>', function(err){
    if (err) throw err;
    console.log('File created and written to...');
})

// Append or create and write to file
fs.appendFile(f, 'This should be the last line...', function(){}) ;

// Read file - need to specify encoding otherwhise cannot read data
fs.readFile(f, 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

// Rename a file --> do not use path.dirname
//console.log('Path.dirname: ' + path.dirname); --> does not work
fs.rename(f, path.join(__dirname, '/test', 'hello_world.html'), function(){
    console.log('rename done...')
});

