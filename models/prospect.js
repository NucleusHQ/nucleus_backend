const mongoose = require("mongoose");

const prospectSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    phone: String,
    joiningDate: {
        type: Date,
        default: Date.now,
    }, 
    sourceId: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Prospect', prospectSchema)