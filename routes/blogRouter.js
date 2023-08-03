const {getAll,
    createOne,
    deleteAll,
    deleteOne,
    updateOne,
    publishOne} = require('../handlers/blogHandler');

const express = require('express');
const router = express.Router();

router.get('/all', getAll); // get all blog (published & unpublished)
router.delete('/', deleteAll);
router.delete('/:id', deleteOne);
router.put('/:id', updateOne);
router.post('/', createOne);
router.patch('/:id', publishOne);

module.exports = router;