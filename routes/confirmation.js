const express = require("express");
const router = express.Router();
const { DISCORD_API_URL, starterPurchaseEmail } = require("../constants");
const nodemailer = require('nodemailer');
const { getProgramName } = require("../utils");
const { getDiscordUrl } = require("../utils");



// CONFIRMATION MESSAGES ACROSS THE BOARD UPON NUCLEUS STARTER PURCHASE

router.post("/starter/email", async (req, res) => {

    // collect the data
    const {fullName, email, phone, programId, purchaseCode, batchNo, mentor, startDate, endDate} = req.body;

    const {name: programName} = getProgramName(programId);
    
    // generate API string for the user join
    const inviteLink = await getDiscordUrl(DISCORD_API_URL, purchaseCode, email);

    const isPortfolioSelected = purchaseCode.includes("P") && true;
    const isMockSelected = purchaseCode.includes("M") && true;

    const fromEmail = 'contact@harishcode.com';

    // craft the email & other nodemailer stuff

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: fromEmail, // Your email address
            pass: 'kvkkzznalbyhljhr', // Your email password or an application-specific password
        },
    });

    const starterPurchaseEmailContent = starterPurchaseEmail(fullName, programName, batchNo, mentor, inviteLink, startDate, endDate, isPortfolioSelected, isMockSelected)
    const mailOptions = {
        from: fromEmail, // Sender's email address
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


module.exports = router;