const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    programId: {
        type: String, 
        required: true
    },
    purchaseCode: {
        type: String, 
        required: true
    },
    amount: {
        type: String, 
        required: true
    }, 
    joiningDate: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Customer', customerSchema)