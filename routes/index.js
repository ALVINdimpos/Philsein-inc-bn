const express = require('express');
const {sendQuery} = require("../handlers/queryHandler");
const {sendApp} = require("../handlers/quappHandler");
const {sendReferral} = require("../handlers/referralHandler");
const {getAllAvailable, getOne} = require("../handlers/blogHandler");
const {createOne} = require("../handlers/staff_formHandlers");
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/resume');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E4)
    req.suffix = uniqueSuffix,
    callback(null, file.originalname.slice(0,-4) + "-" + uniqueSuffix + ".pdf");
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: 200, message: "Welcome to Philse Inc"})
});


router.post('/contact', sendQuery);
router.post('/apply', upload.single("resume"), sendApp);
router.post('/refer', sendReferral);
router.get('/blogs', getAllAvailable); // get published blogs only
router.get('/blogs/:id', getOne);
router.post('/staff', createOne);


module.exports = router;
