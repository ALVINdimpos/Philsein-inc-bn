const Referral = require('../models/referral');
const Query = require("../models/contact_form");


const sendReferral = (req, res) => {
    const uReferral = new Referral({...req.body, readStatus: false});
    uReferral.save()
        .then(_ => {
            res.status(200).json({status: 200, message: "Referral Sent Successfully!"});
        })
        .catch(err => {
            res.status(400).json({status: 200, message: "Referral sending was not successful", error: err})
        })
}


const markAsRead = (req, res) => {
    Referral.findByIdAndUpdate(req.params.id, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Referral Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Referral marking as read was not successful", error: err})
        })
}


const markAllAsRead = (req, res) => {
    Referral.updateMany({}, {readStatus: true})
        .then(_ => {
            res.status(200).json({status: 200, message: "Referrals Marked as Read Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Referrals marking as read was not successful", error: err})
        })
}


const deleteOne = (req, res) => {
    Referral.findByIdAndDelete(req.params.id)
        .then(_ => {
            res.status(200).json({status: 200, message: "Referral Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Referral deletion was not successful", error: err})
        })
}

const deleteAll = (req, res) => {
    Referral.deleteMany()
        .then(_ => {
            res.status(200).json({status: 200, message: "Referrals Deleted Successfully!"})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "Referrals deletion was not successful", error: err})
        })
}


const getAll = (req, res) => {
    Referral.find()
        .then(response => {
            res.status(200).json({status: 200, message: "Referrals Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Referrals pulling was not successful", error: error})
        })
}


const getOne = (req, res) => {
    Referral.findById(req.params.id)
        .then(response => {
            res.status(200).json({status: 200, message: "Referral Pulled Successfully!", data: response})
        })
        .catch(error => {
            res.status(400).json({status: 400, message: "Referral pulling was not successful", error: error})
        })
}


module.exports = {sendReferral, getAll, getOne, markAsRead, markAllAsRead, deleteOne, deleteAll}