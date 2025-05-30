const mongoose=require('mongoose')
const todo = new mongoose.Schema({
    task:String,
    completed:Boolean
})
module.exports=mongoose.model('Todo',todo)

