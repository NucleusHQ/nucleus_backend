const express = require("express");
const router = express.Router();
const Prospect = require("../models/prospect");


//ADDING A LEAD FROM TOP OF THE FUNNEL

router.post("/", async (req, res) => {

    const { fullName, email, phone, joiningDate, sourceId } = req.body;

    try {
        // Create a new member object
        const newProspect = new Prospect({
            fullName,
            email,
            phone,
            joiningDate,
            sourceId
        });

        // Save the new member to the 'members' collection
        await newProspect.save();

        res.status(201).json(newProspect);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

module.exports = router;