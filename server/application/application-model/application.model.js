import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    candidateName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    mobileNumber: { type: String },
    fatherName: { type: String, required: true },
    gender: { type: String },
    emailId: { type: String },
    address: {
      houseNumber: { type: String },
      policeStation: { type: String, required: true },
      city: { type: String },
      pincode: { type: String },
      postOffice: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String },
    },
    education: [
      {
        examPassed: { type: String },
        schoolCollege: { type: String },
        yearOfPassing: { type: String },
        percentage: { type: String },
      },
    ],
    uploadedFiles: {
      passport: { type: String },
      certificate: { type: String },
      aadhar: { type: String },
    },
  });
  
  const Application = mongoose.model('Application', applicationSchema);
  
  module.exports = Application;


// const applicationSchema = new mongoose.Schema({
//     post:{type:String, required:true},

//     personalDetails:{
//         candidateName:{type:String, required:true},
//         fatherName:{type:String, required:true},
//         dateOfBirth:{type:Date, required:true},
//         gender:{type:String, required:true},
//         mobileNumber:{type:String, required:true},
//         emailId:{type:String, required:true}
//     },

//     candidateAddress:{
//         houseNumber: {type:String, required:true},
//         postOffice:{type:String, required:true},
//         policeStation:{type:String, required:true},
//         district:{type:String, required:true},
//         city:{type:String, required:true},
//         state:{type:String, required:true},
//         pinCode:{type:String, required:true}
//     },

//     educationQualification:{
//         tenth:{
//             school:{type:String, required:true},
//             yearOfPassing:{type:String, required:true},
//             Percentage:{type:String, required:true}
//         },

//         twelfth:{
//             college:{type:String, required:true},
//             yearOfPassing:{type:String, required:true},
//             Percentage:{type:String, required:true}
//         },

//         Diploma:{
//             college:{type:String, required:true},
//             yearOfPassing:{type:String, required:true},
//             Percentage:{type:String, required:true}
//         },
//     },

//     uploadPicture:{
//         passportPicture:{ },
//         tenthCertificate:{ },
//         aadharCard:{ }
//     }

// })