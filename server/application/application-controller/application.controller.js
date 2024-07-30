import Application from "../application-model/application.model.js";
import nodemailer from "nodemailer";
import multer,{memoryStorage} from "multer";

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

// const upload1 = multer({ dest: 'uploads/' })


const applicationController = {
  createApplicationDetails: [upload.single("image"), 
    async (req,res) => {
try {
  const image = {data: Buffer.from(req.file.buffer).toString("base64"), contentType: req.file.mimetype}

  const formData = req.body;
const applicationData = new  Application(formData);
await applicationData.save();
res.status(201).json({ message: "Successfully data added",applicationData });

} catch (error) {
  res.status(400).json({ error: "internal server error" });
  
}
  }],
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.GMAIL_USER,
    // pass: process.env.GMAIL_PASS,
    user: 'kamalakar843@gmail.com', // Your Gmail address
    pass: '15263748',  // Your Gmail password or App Password
  },
});

// Email options
const mailOptions = {
  from: 'kamalakar843@gmail.com',         // Sender's email address
  to: 'wwe.kamalakar@gmail.com',    // List of recipients
  subject: 'Hello from Nodemailer!',    // Subject line
  text: 'This is a test email sent from a Node.js application!', // Plain text body
  html: '<h1>Hello from Nodemailer!</h1><p>This is a test email sent from a <strong>Node.js</strong> application!</p>' // HTML body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error while sending email:', error);
  }
  console.log('Email sent: ' + info.response);
});


// // Nodemailer configuration

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'sailorswaveshipmanagement@gmail.com',
//     pass: 'doygmlhxqcdvkqwj',
//   },
// });


// const sendMail = (applicantEmail) => {
//   const mailOptions = {
//     from: 'sailorswaveshipmanagement@gmail.com',
//     to: applicantEmail,
//     subject: 'Application Received',
//     text: 'Thank you for applying. We have received your application.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };

// exports.submitApplication = async (req, res) => {
//   try {
//     const applicationData = req.body;
//     const application = new Application(applicationData);
//     await application.save();

//     // Send confirmation email
//     if (application.emailId) {
//       sendMail(application.emailId);
//     }

//     res.status(201).json({ message: 'Application submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting application', error });
//   }
// };

export default applicationController;
