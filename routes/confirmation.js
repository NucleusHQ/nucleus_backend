const express = require("express");
const router = express.Router();
const { DISCORD_API_URL } = require("../constants");
const nodemailer = require('nodemailer');
const { getProgramName } = require("../utils");
const { getDiscordUrl } = require("../utils");
const webinarRegistrationEmail = require("../emails/webinarRegistration");
const starterPurchaseEmail = require("../emails/JSMasteryRegistration");

// CONFIRMATION MESSAGES ACROSS THE BOARD UPON NUCLEUS STARTER PURCHASE

router.post("/starter/email", async (req, res) => {

    // collect the data
    const {fullName, email, phone, programId, purchaseCode, batchNo, mentor, startDate, endDate} = req.body;

    const {name: programName} = getProgramName(programId);
    
    // generate API string for the user join
    const inviteLink = await getDiscordUrl(DISCORD_API_URL, purchaseCode, email);

    const isPortfolioSelected = purchaseCode.includes("P") && true;
    const isMockSelected = purchaseCode.includes("M") && true;

    const fromEmail = 'hi@nucleushq.io';
    const fromEmailPassword = "hmdsnxcjfemcrscw";

    // craft the email & other nodemailer stuff

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: fromEmail, // Your email address
            pass: fromEmailPassword, // Your email password or an application-specific password
        },
    });

    const starterPurchaseEmailContent = starterPurchaseEmail(fullName, programName, batchNo, mentor, inviteLink, startDate, endDate, isPortfolioSelected, isMockSelected)
    const mailOptions = {
        from: `NucleusHQ ${fromEmail}` , // Sender's email address
        to: email, // Recipient's email address
        subject: '8-Week JS Mastery Program <> Nucleus',
        text: starterPurchaseEmailContent, // Your email content
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Email sending failed');
        } else {
          console.log('Email sent:', info.response);
          res.status(200).send('Email sent successfully');
        }
      });
});

router.post("/starter/whatsapp", async(req, res) => {

    //collect the data
    const {fullName, email, phone, programId, purchaseCode, amount, purchaseDate} = res.body;

})

router.post("/webinar/email", async (req, res) => {
   // collect the data
   const {fullName, email, programId, startTime, duration} = req.body;

   const {name: webinarName} = getProgramName(programId);

   const inviteLink = "https://discord.gg/Hu4haUQ8wq"; 
   const meetingLink = "https://us05web.zoom.us/j/82150171903?pwd=MzxRfzmVTbnRksjcRs6Nu4MDzgbmra.1"

   const fromEmail = 'hi@nucleushq.io';
   const fromEmailPassword = "hmdsnxcjfemcrscw";

   const transporter = nodemailer.createTransport({
       service: 'Gmail', 
       auth: {
           user: fromEmail, 
           pass: fromEmailPassword, 
       },
   });

   const content = webinarRegistrationEmail(fullName, webinarName, inviteLink, meetingLink, startTime, duration)

   const mailOptions = {
       from: `NucleusHQ ${fromEmail}` , // Sender's email address
       to: email, // Recipient's email address
       subject: `Registration confirmation for ${webinarName} <> Nucleus`,
       text: content, // Your email content
     };

     transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
         console.error('Error sending email:', error);
         res.status(500).send('Email sending failed');
       } else {
         console.log('Email sent:', info.response);
         res.status(200).send('Email sent successfully');
       }
     });
})


module.exports = router;