const express = require('express')
const app=express()
const router=require('./routes/egRoutes')
const connectDB=require('./config/db')
const dotenv=require('dotenv')
dotenv.config()
connectDB()
const PORT=process.env.PORT
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log('server running')
})
