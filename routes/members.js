const express = require("express");
const router = express.Router();
const Member = require("../models/member");


//ADDING A NEW MEMBER FROM DISCORD

router.post("/", async (req, res) => {

    const { fullName, email, role, uid, phone, isEmailVerified = false } = req.body;

    try {
        // Create a new member object
        const newMember = new Member({
            fullName,
            email,
            role,
            uid,
            phone,
            isEmailVerified,
        });

        // Save the new member to the 'members' collection
        await newMember.save();

        res.status(201).json(newMember);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});


router.get("/", (req, res) => {
    res.send("Hello World")
}) 


module.exports = router;