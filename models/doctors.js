const mongoose=require('mongoose');
const DoctorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Doctor=mongoose.model('Doctor',DoctorSchema);
module.exports=Doctor;