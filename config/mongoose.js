// inserted the library
const mongoose= require('mongoose');
// made the connection to the database
mongoose.connect('mongodb://localhost/todo_list_db');
// acquire the connection to check whether it is successfull
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connectiong to db'));
// up and running then print the message
db.once('open',function()
{
    console.log("successfully connected to the database");
});
