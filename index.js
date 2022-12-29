// included the express and basic lib
const express= require('express');

const path = require('path');
const port = 8000;
const app = express();

// included database
const db = require('./config/mongoose');
const Todo = require('./models/todo');
// setup the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());

// setup the router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});

