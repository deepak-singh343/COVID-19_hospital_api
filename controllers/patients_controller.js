
const Report=require('../models/reports');
const Doctor=require('../models/doctors');
const Patient=require('../models/patients');

module.exports.createReport=async function(req,res)
{
    try{
        let doctor=await Doctor.findOne({_id:req.user});
        let patient=await Patient.findById(req.params.id);
        if(patient)
        {
            const newreport=await Report.create({
                status:req.body.status,
                patient:req.params.id,
                doctor:req.user,
                date:req.body.date
            });
            patient.report.push(newreport);
            patient.save();
            res.status(201).json(newreport);
        }
        else{
            res.status(401).json({
                message:"Patient not found"
            })
        }
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
} 

module.exports.getReports=async function(req,res)
{
    try {
        let patient=await Patient.findOne({_id:req.params.id})
        .populate({path: 'doctor', select: ['name','email']})
        .populate({path: 'report', options:{sort: {createdAt:1}}})

        return res.status(200).json({
            message:"Reports",
            patient
        })
        
    } catch (err) {
        res.status(400).json({
            message:err.message
        })
    }
}


module.exports.status=async function(req,res)
{
    try{
        let report=await Report.find({status:req.params.status});
        if(report)
        {
            return res.status(201).json({
                message:"reports",
                report
            })
        }
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}