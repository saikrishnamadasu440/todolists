const mongoose =  require('mongoose');
//same instance is used
const TodoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
     type:String,
     required:true
    },
    category:{
        type:String,
        required:true
    }
});

const Todo = mongoose.model('Todo',TodoSchema); 

module.exports = Todo;