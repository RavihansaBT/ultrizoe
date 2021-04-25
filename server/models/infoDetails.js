const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNo: {
        type: String
    },
    gender: Number,
    country: String,
    createAt: {
        type: Date,
        default: new Date().getTime()
    }
});

const InfoDetails = mongoose.model('InfoDetails', InfoSchema)

module.exports = InfoDetails