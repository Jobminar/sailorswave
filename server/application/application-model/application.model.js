import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({
    post:{type:String, required:true},
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
      passport: { 
        type: String,
      data:Buffer,
    contentType:String
   },
      certificate: { type: String },
      aadhar: { type: String },
    },
  });
  
  const Application = mongoose.model('Application', applicationSchema);
  
  export default Application;
