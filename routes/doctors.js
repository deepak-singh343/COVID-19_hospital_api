const express=require('express');
const router=express.Router();
const passport=require('passport');
const doctorsController=require('../controllers/doctors_controller');
router.post('/login',doctorsController.login);
router.post('/register_patient',passport.authenticate('jwt',{session:false}),doctorsController.addPatient);
router.post('/register',doctorsController.addDoctor);
module.exports=router;