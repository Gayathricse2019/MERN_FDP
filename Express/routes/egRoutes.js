const express = require('express')
const router=express.Router();
const{getRoute,postRoute}=require('../controllers/egcontrollers')
router.get('/get',getRoute)
router.post('/post',postRoute)
module.exports=router