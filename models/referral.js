const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const isEmail = require('../utils/validators/email');


const referralSchema = new Schema({
    referer: {
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
        }
    },
    referee: {
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
        position: {
            type: String,
            required: true
        },
        relationship_with_referer: {
            type: String,
            required: true
        }
    },
    readStatus: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


const Referral = mongoose.model('Referral', referralSchema);


module.exports = Referral;