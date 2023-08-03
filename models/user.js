const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const isEmail = require("../utils/validators/email");


const userSchema = new Schema({
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
        unique: true,
        validate: {
            validator: value => isEmail(value),
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


module.exports = User;