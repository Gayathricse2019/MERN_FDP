exports.getRoute=(req,res)=>{
    res.json({
        message:"Running"
    })
}

exports.postRoute=(req,res)=>{
    const name=req.body.name
    res.send(`i am ${name}`)
}
