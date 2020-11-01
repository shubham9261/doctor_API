const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
       phone:{
           type:String,
           required:true,
           unique:true
       },
      status:{
          type:String,
          required:true
      },
      date:{
        type:String,
        required:true
      }
},{
    timestamps:true
});
const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient; 