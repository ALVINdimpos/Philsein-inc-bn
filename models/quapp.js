const mongoose = require('mongoose');
const Schema = mongoose.Schema
const isEmail = require('../utils/validators/email');


const quappSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: value => isEmail(value),
            message: props => `${props.value} is not a valid email`
        }
    },
    phone: {
        type: String,
        required: true
    },
    address: [{
        type: String,
        required: true
    }],
    city: String,
    province: String,
    postal_code: String,
    work_permit: Boolean,
    position: {
        type: String,
        required: true
    },
    regions: [{
        type: String,
        required: true
    }],
    schedule: String,
    resume: [{
        type: String,
        default: []
    }],
    resume_by_email: {
        type: Boolean,
        default: false
    },
    readStatus: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const Quapp = mongoose.model("Quapp", quappSchema);


module.exports = Quapp;