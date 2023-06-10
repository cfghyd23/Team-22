const mongoose = require("mongoose");
const { isEmail } = require('validator');

function isMobile(num) {

    if (num.match(/^\d{10}$/)) {
        return true;
    }

    return false;
}

const userSchema = new mongoose.Schema({
    mobile: {type: String,
        required: true,
        unique: true,
        validator: [isMobile, 'Invalid Mobile Number']},
    email: {type: String,
        required: true,
        unique: true,
        validator: [isEmail, 'Invalide Email']},
    name: String,
    dob: Date,
    bloodGroup: String,
    weight: Number,
    gender: String,
    password: String,
    admin: Boolean,
    donor: Number, /*0 for not donor,1 for wants to donate/pending,2 for approved donor*/ 
    patient: Number /*0 for not Required, 1 for blood Required,2 for approved patient */
});

const users = new mongoose.model('users',userSchema);

module.exports = users;