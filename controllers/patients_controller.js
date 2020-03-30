const Patient=require('../models/patients');
const Report=require('../models/reports');
module.exports.createPatient=async function(req,res)
{
    try{
        Patient.findOne({phone:req.body.phone},function(err,patient)
        {
            if(err)
            {
                res.status(404).json({
                    message:err.message
                });
                return;
            }
            if(!patient)
            {
                const patient=new Patient({
                    phone:req.body.phone,
                    name:req.body.name,
                    doctor:req.body.doctor
                });
                const newPatient=patient.save();
                res.status(201).json(newPatient);
            }
            else{
                let patients=Patient.find({phone:req.body.phone}).populate('doctor')
                return res.status(200).json({
                    message:"Patient Details",
                    patient:patient
                })
            }
        })
       
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}  

module.exports.createReport=async function(req,res)
{
    try{
        let patient=Patient.findById(req.params.id);
        if(patient)
        {
            const report=await Report.create({
                status:req.body.status,
                patient:req.body.patient,
                doctor:req.body.doctor,
                date:req.body.date
            });
            report.save();
            res.status(201).json(report);
        }
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
} 

module.exports.getReports=async function(req,res)
{
    let reports=await Report.find(req.param('patient_id'))
    .populate('doctor')
    .populate('patient')
    return res.status(200).json({
        message:"Reports",
        reports:reports
    })
}