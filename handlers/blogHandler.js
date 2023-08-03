const Blog = require('../models/blog');


const getAll = (req, res) => {
    Blog.find()
        .then(response => {
            res.status(200).json({status: 200, message: "Blogs Pulled Successfully!", data: response});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blogs pulling was not successful", error: err});
        })
}


const getAllAvailable = (req, res) => {
    Blog.find({publish: true})
        .then(response => {
            res.status(200).json({status: 200, message: "Blogs Pulled Successfully!", data: response});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blogs pulling was not successful", error: err});
        })
}


const getOne = (req, res) => {
    Blog.findById(req.params.id)
        .then(response => {
            res.status(200).json({status: 200, message: "Blog Pulled Successfully!", data: response});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blog pulling was not successful", error: err});
        })
}


const deleteAll = (req, res) => {
    Blog.deleteMany()
        .then(_ => {
            res.status(200).json({status: 200, message: "Blogs Deleted Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blogs deleting was not successful"});
        })
}


const deleteOne = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.status(200).json({status: 200, message: "Blog Deleted Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blog deleting was not successful"});
        })
}


const publishOne = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, {publish: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Blog Published Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blog publishing was not successful", error: err});
        })
}


const updateOne = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body)
        .then(_ => {
            res.status(200).json({status: 200, message: "Blog Updated Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blog updating was not successful", error: err});
        })
}


const createOne = (req, res) => {
    const uBlog = new Blog({...req.body, publish: false})
    uBlog.save()
        .then(_ => {
            res.status(200).json({status: 200, message: "Blog Created Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Blog creating was not successful", error: err});
        })
}


module.exports = {getAll, createOne, getOne, deleteAll, deleteOne, updateOne, publishOne, getAllAvailable};