/*const express = require('express')
const router=express.Router();
const{getRoute,getByIdRoute,postRoute,putRoute,deleteRoute}=require('../controllers/egcontrollers')
router.get('/get',getRoute)
router.get('/get/:id',getByIdRoute)
router.post('/post',postRoute)
module.exports=router*/

const express = require('express')
const router = express.Router()
const {getRoute,getByIdRoute,postRoute,putRoute,deleteRoute} =
require('../controllers/egcontrollers')
router.get('/get',getRoute)
router.get('/get/:id',getByIdRoute)
router.post('/post',postRoute)
router.put('/put/:id',putRoute)
router.delete('/delete/:id',deleteRoute)
module.exports = router