const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/hospital_api_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error in connecting to the mongodb"));
db.once('open',function(){
    console.log('Connected to the database');
})
module.exports=db;