const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    id: {
        type: String, 
        required: false
    }, 
    role: {
        type: Array, 
        required: false, 
    }, 
    phone: {
        type: String,
        required: false
    }, 
    isEmailVerified: {
        type: Boolean,
        required: false 
    }, 
    joiningDate: {
        type: Date, 
        required: false, 
        default: Date.now
    }
})

module.exports = mongoose.model('Member', memberSchema)