const express=require('express');
const router=express.Router();
const doctorsController=require('../controllers/doctors_controller');
router.post('/',doctorsController.login);
router.post('/register',doctorsController.addDoctor);
module.exports=router;