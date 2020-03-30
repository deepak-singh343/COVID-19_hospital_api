const Doctor=require('../models/doctors');
const jwt=require('jsonwebtoken');
module.exports.addDoctor=async function(req,res)
{
    const doctor=new Doctor({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name
    });
    try{
        const newDoctor=await doctor.save();
        res.status(201).json(newDoctor);
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

module.exports.login=async function(req,res)
{
    try{
        let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor||doctor.password!=req.body.password)
        {
            return res.status(422).json({
                message:"Invalid username or password"
            });
        }
        return res.status(200).json({
            message:'Sign in successfully',
            data:{
                token:jwt.sign(doctor.toJSON(),'hospital_api',{expiresIn:'10000000'})
            }
        });
    }
    catch(err)
    {
        return res.json(500,{
            message:'Internal Server error'
        })
    }
}