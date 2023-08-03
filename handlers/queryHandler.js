const Query = require('../models/contact_form');


const sendQuery = (req, res) => {
    const uQuery = new Query({...req.body, readStatus: false})
    uQuery.save()
        .then(_ => {
            res.status(200).json({status: 200, message: "Query Sent Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Query sending was not successful", error: err})
        })
}


const markAsRead = (req, res) => {
    Query.findByIdAndUpdate(req.params.id, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Query Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Query marking as read was not successful", error: err})
        })
}


const markAllAsRead = (req, res) => {
    Query.updateMany({}, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Queries Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Queries marking as read was not successful", error: err})
        })
}


const deleteOne = (req, res) => {
    Query.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.status(200).json({status: 200, message: "Query Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Query deletion was not successful", error: err})
        })
}

const deleteAll = (req, res) => {
    Query.deleteMany()
        .then(_ => {
            res.status(200).json({status: 200, message: "Queries Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Queries deletion was not successful", error: err})
        })
}


const getAll = (req, res) => {
    Query.find()
        .then(response => {
            res.status(200).json({status: 200, message: "Queries Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Queries pulling was not successful", error: error})
        })
}


const getOne = (req, res) => {
    Query.findById(req.params.id)
        .then(response => {
            res.status(200).json({status: 200, message: "Query Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Query pulling was not successful", error: error})
        })
}


module.exports = {sendQuery, getAll, getOne, markAsRead, markAllAsRead, deleteOne, deleteAll}