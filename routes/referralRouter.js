const {
    getAll,
    getOne,
    markAsRead,
    markAllAsRead,
    deleteOne,
    deleteAll} = require('../handlers/referralHandler');
const express = require('express');
const router = express.Router();


router.get('/', getAll);
router.get('/:id', getOne);
router.patch('/mark-all-as-read', markAllAsRead);
router.patch('/mark-as-read/:id', markAsRead);
router.delete('/', deleteAll);
router.delete('/:id', deleteOne);


module.exports = router;