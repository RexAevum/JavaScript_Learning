// basic server syntax
const path = require('path');
//const members = require('./routs/api/member'); // for files need to add ./ for current folder
const moment = require('moment');
const logger = require('./middleware/logger');
const members = require('./members');

// import express
const express = require('express');
const router = require('./routes/api/member');

// import express-handlebasrs 
const exphbs = require('express-handlebars');

// init express
const app = express();

// Handlebars middleware - per documentation
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// init body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// WARNING - if using handlebars, will override static declerations --> only use either static or handlebars
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App !!!', // can be past and set to a variable on the template page
        members
    });
});


// Create your endpoints/route handler - have to write a handler for each get call (/, /about, /info, etc)
// root folder/ home page
// app.get('/', (req, res) => {
//     // Do work
//     //res.send(`<h1>Hello world!!</h1>`);
//     const f = path.join(__dirname, '/public', 'index.html');
//     res.sendFile(f)
// });

// use the router that is in another file
// members API Routes
app.use('/api/members', require('./routes/api/member'));


// init logger middleware
app.use(logger);

// express allows an easier option for handelng static folders - can access every file in static folder
// Set static folder --> only use either static or handlebars
//app.use(express.static(path.join(__dirname, '/public')));

// set up port handeling
const PORT = process.env.PORT || 5000;

// listen on specified port for connection
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));