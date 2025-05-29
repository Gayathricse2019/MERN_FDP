 const Todo=require('../models/todo') 
exports.getRoute=async(req,res)=>{
    const todoList = await Todo.find();
  res.json(todoList)
}

exports.getbyIdRoute=async(req,res)>={
    const Task = await Todo.findById(req.params.id);
    res.json(Task);
}

exports.postRoute=(req,res)=>{
    const {name,message}=req.body
    const exist = await Todo.findOne({name});
    if(exist) return res.status(404).json({
        message:"Task Already Exist",
    })
    const newTask = new Todo({name,message})
    await newTask.save();
    res.status(201).json({
    message:"Task Added sucessfully",
    task:newTask
})
}

