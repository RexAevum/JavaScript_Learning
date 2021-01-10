/* Events are functions that will be ran once an event happens, ex. press submit */

//import
const EventEmitter = require('events');

// Create a class
class MyEmitter extends EventEmitter{

};

// Init class object
const myEmitter = new MyEmitter();

// Creat an event listener - once the event is called using .emit('{given event name}')
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.on('x', () => {console.log('Event x...')});

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('x');
