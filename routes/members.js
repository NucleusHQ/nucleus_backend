const express = require("express");
const router = express.Router();
const Member = require("../models/member");


//CREATING A JUST VERIFIED MEMBER IN DISCORD

router.post("/", async (req, res) => {
    const {fullName, email, role, id, phone, isEmailVerified, joiningDate} = req.body;

    const isExisting = await Member.findOne({id});

    if(isExisting) {
        return res.status(409).json({
            message: 'User with this ID already exists.',
            code: 'USER_ALREADY_EXISTS',
        });
    }

    const newMember = new Member({
        fullName, 
        email, 
        id, 
        role, 
        phone, 
        isEmailVerified, 
        joiningDate
    })

    try {
        await newMember.save();
        res.status(201).json(newMember);
    } catch(err) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


router.get("/", (req, res) => {
    res.send("Hello World")
}) 


module.exports = router;