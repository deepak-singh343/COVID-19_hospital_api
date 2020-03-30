const express=require('express');
const router=express.Router();
const passport=require('passport');
const registerPatientcontroller=require('../controllers/patients_controller');
router.post('/',passport.authenticate('jwt',{session:false}),registerPatientcontroller.createPatient);
module.exports=router;