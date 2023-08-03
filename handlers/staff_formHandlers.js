const Staff = require('../models/staff_form');


const getAll = (req, res) => {
    Staff.find()
        .then(response => {
            res.status(200).json({status: 200, message: "Staff Request Forms Pulled Successfully!", data: response});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request forms pulling was not successful", error: err});
        })
}


const getOne = (req, res) => {
    Staff.findById(req.params.id)
        .then(response => {
            res.status(200).json({status: 200, message: "Staff Request Form Pulled Successfully!", data: response});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request form pulling was not successful", error: err});
        })
}

const deleteAll = (req, res) => {
    Staff.deleteMany()
        .then(_ => {
            res.status(200).json({status: 200, message: "Staff Request Forms Deleted Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request forms deleting was not successful", error: err})
        })
}


const deleteOne = (req, res) => {
    Staff.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.status(200).json({status: 200, message: "Staff Request Forms Deleted Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request forms deleting was not successful", error: err})
        })
}


const createOne = (req, res) => {
    const uStaff = new Staff({...req.body, readStatus: false});
    uStaff.save()
        .then(_ => {
            res.status(200).json({status: 200, message: "Staff Request Form Created Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request form creation was not successful", error: err})
        })
}


const markAsRead = (req, res) => {
    Staff.findByIdAndUpdate(req.params.id, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Staff Request Form Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request form marking as read was not successful", error: err})
        })
}


const markAllAsRead = (req, res) => {
    Staff.updateMany({}, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Staff Request Forms Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Staff request forms marking as read was not successful", error: err})
        })
}


module.exports = {getAll, getOne, deleteAll, deleteOne, createOne, markAllAsRead, markAsRead};