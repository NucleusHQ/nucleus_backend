const express = require("express");
const router = express.Router();
const { DISCORD_API_URL } = require("../constants");
const { getDiscordUrl } = require("../utils");


// CONFIRMATION MESSAGES ACROSS THE BOARD UPON PURCHASE

router.post("/email", async (req, res) => {

    
    // collect the data
    const {fullName, email, phone, programId, purchaseCode, amount, purchaseDate} = req.body;
    
    // generate API string for the user join
    const inviteLink = getDiscordUrl(DISCORD_API_URL, purchaseCode, email);

    // craft the email

    // send it to the user email

    // initiate WhatsApp Confirmation

});

router.post("/whatsapp", async(req, res) => {

    //collect the data
    const {fullName, email, phone, programId, purchaseCode, amount, purchaseDate} = res.body;

})


module.exports = router;