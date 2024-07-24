import Application from "../application-model/application.model.js";
import nodemailer from "nodemailer";


// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sailorswaveshipmanagement@gmail.com',
    pass: 'doygmlhxqcdvkqwj',
  },
});

const sendMail = (applicantEmail) => {
  const mailOptions = {
    from: 'sailorswaveshipmanagement@gmail.com',
    to: applicantEmail,
    subject: 'Application Received',
    text: 'Thank you for applying. We have received your application.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

exports.submitApplication = async (req, res) => {
  try {
    const applicationData = req.body;
    const application = new Application(applicationData);
    await application.save();

    // Send confirmation email
    if (application.emailId) {
      sendMail(application.emailId);
    }

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error });
  }
};