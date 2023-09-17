const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");


//ADDING A NEW MEMBER FROM DISCORD

router.post("/", async (req, res) => {

    const { fullName, email, phone, programId, purchaseCode, amount, joiningDate } = req.body;

    try {
        // Create a new member object
        const newCustomer = new Customer({
            fullName,
            email, 
            phone, 
            programId, 
            purchaseCode, 
            amount, 
            joiningDate
        });

        // Save the new member to the 'members' collection
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});


router.get("/", (req, res) => {
    res.send("Hello World")
}) 


module.exports = router;