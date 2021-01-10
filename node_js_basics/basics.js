/* Create a logger */
// import Logger
const Logger = require('./logger');
// init a new logger
const logger = new Logger();
// create an event
logger.on('message', (data) => {console.log(`Called Listener`, data)
    console.log(data)
});

//call an event
logger.log('Hello World');
logger.log('How are you today?');

// --------------------------------------------------------------------------
/*
// ES6 not implemented in node yet import Person from './person';

// common js
const Person = require("./person");

console.log(`Hello world`);

// import object from another file
// for objects
// NOTE - the path is not case sensetive
const person = require('./person'); // in file path do not need to specify file type
console.log(person);

// instantiate an import class from another file
const person1 = new Person();
console.log(person1);
// use a method from a class
person1.greeting();
*/