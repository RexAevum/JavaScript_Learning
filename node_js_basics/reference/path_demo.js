// import path
const path = require('path');

// Base file name - get file name without file path
console.log(path.basename(__filename));

//  Directory name - get directory without file
console.log(path.dirname(__filename));

// Get the extension
console.log(path.extname(__filename));

// Create path object - returns a dict of all the elements
console.log(path.parse(__filename));

// Concatinate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
// Returns - S:\JavaScript_Learning\node_js_basics\reference\test\hello.html
