const {
    getAll,
    getOne,
    deleteAll,
    deleteOne,
    markAllAsRead,
    markAsRead} = require('../handlers/staff_formHandlers');
const express = require('express');
const router = express.Router();


router.get('/', getAll);
router.get('/:id', getOne);
router.delete('/', deleteAll);
router.delete('/:id', deleteOne);
router.patch('/mark-all-as-read', markAllAsRead);
router.patch('/mark-as-read/:id', markAsRead);


module.exports = router;