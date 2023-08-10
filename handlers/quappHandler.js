const Quapp = require('../models/quapp');


const sendApp = (req, res) => {
    req.body = {...req.body};
    const uQuapp = new Quapp({...req.body, readStatus: false});
    uQuapp.save()
        .then(_ => {
            res.status(200).json({status: 200, message: "Application Sent Successfully"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Application sending was not successful", error: err});
        })
}

const markAsRead = (req, res) => {
    Quapp.findByIdAndUpdate(req.params.id, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Application Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Application marking as read was not successful", error: err})
        })
}


const markAllAsRead = (req, res) => {
    Quapp.updateMany({}, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Applications Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Applications marking as read was not successful", error: err})
        })
}


const deleteOne = (req, res) => {
    Quapp.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.status(200).json({status: 200, message: "Application Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Application deletion was not successful", error: err})
        })
}

const deleteAll = (req, res) => {
    Quapp.deleteMany()
        .then(_ => {
            res.status(200).json({status: 200, message: "Applications Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Applications deletion was not successful", error: err})
        })
}


const getAll = (req, res) => {
    Quapp.find()
        .then(response => {
            res.status(200).json({status: 200, message: "Applications Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Applications pulling was not successful", error: error})
        })
}


const getOne = (req, res) => {
    Quapp.findById(req.params.id)
        .then(response => {
            res.status(200).json({status: 200, message: "Application Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Application pulling was not successful", error: error})
        })
}


module.exports = {sendApp, getAll, getOne, markAsRead, markAllAsRead, deleteOne, deleteAll}