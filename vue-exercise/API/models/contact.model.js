const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{ timestamps: true })

contactSchema.plugin(aggregatePaginate);

const users = mongoose.model('user', contactSchema);

module.exports = users;