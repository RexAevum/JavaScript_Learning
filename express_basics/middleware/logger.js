const moment = require('moment');
// create a middleware logger
// all middleware will take in (request, response, next)
// next -> always last to move on to the next middleware in the stack
const logger = (req, res, next) => {
    // print the url that's requested and add the current time
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;