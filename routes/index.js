const express = require('express');
const {sendQuery} = require("../handlers/queryHandler");
const {sendApp} = require("../handlers/quappHandler");
const {sendReferral} = require("../handlers/referralHandler");
const {getAllAvailable, getOne} = require("../handlers/blogHandler");
const {createOne} = require("../handlers/staff_formHandlers");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: 200, message: "Welcome to Philse Inc"})
});


router.post('/contact', sendQuery);
router.post('/apply', sendApp);
router.post('/refer', sendReferral);
router.get('/blogs', getAllAvailable); // get published blogs only
router.get('/blogs/:id', getOne);
router.post('/staff', createOne);


module.exports = router;
