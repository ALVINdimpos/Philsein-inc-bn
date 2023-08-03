const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const isEmail = require('../utils/validators/email');


const querySchema = new Schema({
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
    message: {
        type: String,
        required: true
    },
    readStatus: {
        type: Boolean,
        required: false,
        default: false
    }
}, { timestamps: true});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;