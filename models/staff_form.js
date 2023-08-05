const isEmail = require("../utils/validators/email");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    want_to_hire: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    company_email: {
        type: String,
        required: true,
        validate: {
            validator: value => isEmail(value),
            message: props => `${props.value} is not a valid email`
        }
    },
    size_of_company: {
        type: String,
        required: false
    },
    phone_number: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true,
    },
    readStatus: {
        type: Boolean,
        required: false,
        default: false
    }
}, {timestamps: true});


const Staff = mongoose.model("Staff_form", staffSchema);


module.exports = Staff;