const mongoose=require('mongoose')
const todo = new mongoose.Schema({
    name:String,
    message:String
})
module.exports=mongoose.model('Todo',todo)