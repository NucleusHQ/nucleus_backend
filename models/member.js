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
    uid: {
        type: String, 
        required: true, 
        unique: true
    }, 
    role: {
        type: [String],
        validate: {
            validator: function (arr) {
                return arr.length > 0;
            },
            message: "At least one role is required.",
        },
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
        default: Date.now,
    }
})

module.exports = mongoose.model('Member', memberSchema)