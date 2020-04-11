const express=require('express');
const router=express.Router();
const passport=require('passport');
const PatientsController=require('../controllers/patients_controller');
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),PatientsController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),PatientsController.getReports);
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),PatientsController.status);
module.exports=router;