const mongoose=require('mongoose');
// included the mongoose
// defined the basic schema for the databse in which data has to be stored
const todoSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
// exported the schema 
const Todo= mongoose.model('Todo',todoSchema );
module.exports=Todo;