const express = require('express');
const router = express.Router();
const { createOne, login } = require('../handlers/userHandler');
const {isLoggedin} = require("../middleware/auth");


router.post('/', isLoggedin, createOne);
router.post('/login', login);


module.exports = router;