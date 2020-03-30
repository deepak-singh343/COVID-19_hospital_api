const express=require('express');
const router=express.Router();
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));
router.use('/register_patient',require('./register_patient'));
// router.use('/getNote',require('./getNote'));
// router.use('/deleteNote',require('./deleteNote'));
// router.use('/editNote',require('./editNote'));
module.exports=router;