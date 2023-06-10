const mongoose = require("mongoose");
const { isEmail } = require('validator');

function isMobile(num) {

    if (num.match(/^\d{10}$/)) {
        return true;
    }

    return false;
}

const bloodBankSchema = new mongoose.Schema({
    mobile: {type: String,
        required: true,
        unique: true,
        validator: [isMobile, 'Invalid Mobile Number']},
    email: {type: String,
        required: true,
        unique: true,
        validator: [isEmail, 'Invalide Email']},
    password: String,
    name:String,
    Address: String,
    Aneg: Number,
    Apos: Number,
    Bneg: Number,
    Bpos: Number,
    ABpos: Number,
    ABneg: Number,
    Opos: Number,
    Oneg: Number
});

const bloodBanks = new mongoose.model('bloodBanks',bloodBankSchema);

module.exports = bloodBanks;