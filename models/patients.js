const mongoose=require('mongoose');
const PatientSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    } 
},{
    timestamps:true
});
const Patient=mongoose.model('Patient',PatientSchema);
module.exports=Patient;