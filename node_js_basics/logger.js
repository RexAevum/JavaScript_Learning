/* Creata a logger */
const EventEmitter = require('events');
const uuid = require('uuid');

// Print UUID
//console.log(uuid.v4);

// create a logger class
class Logger extends EventEmitter{
    // Create a log method
    log(msg){
        // Call event and pass a dict of id and msg
        // user will set the message, while the uuid will be auto generated
        this.emit('message', {id: uuid.v4(), msg})
    }
};

// export 
module.exports = Logger;