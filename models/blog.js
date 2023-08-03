const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    body: {
        type: String,
        required: true
    },
    publish: {
        type: Boolean,
        required: false,
        default: false
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;