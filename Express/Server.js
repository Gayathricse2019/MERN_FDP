const express = require('express')
const app=express()
const router=require('./routes/egRoutes')
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log('server running')
})
