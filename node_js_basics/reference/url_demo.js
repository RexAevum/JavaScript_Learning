/* Deals with working with URLs */
const url = require('url');

//
const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL - return the URL as a string
console.log(myURL.href);
console.log(myURL.toString()); // same as above

// Get Host (root domain)
console.log(myURL.host);

// Get Hostname only - does NOT get port
console.log(myURL.hostname);

// Pathname - file path minus the host name and passed variables
console.log(myURL.pathname);

// Serialized query - everything after the ? mark
console.log(myURL.search);

// Params object - return {'{name of parameter}' => '{passed value}'}
console.log(myURL.searchParams);

// Add parameters
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

// Loop through params - returns in reversed order than when you print using .searchParams
myURL.searchParams.forEach(function(value, name){
    console.log(`${name}: ${value}`);
})