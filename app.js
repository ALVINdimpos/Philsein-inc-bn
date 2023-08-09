const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger');
const cors = require('cors');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/resume');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
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
    fileSize: 1024 * 5
  },
  fileFilter: fileFilter
});


const indexRouter = require('./routes/index');
const queryRouter = require('./routes/queryRouter');
const blogRouter = require('./routes/blogRouter');
const staffRouter = require('./routes/staff_formRouter');
const quappRouter = require('./routes/quappRouter');
const referralRouter = require('./routes/referralRouter');
const userRouter = require('./routes/userRouter');

const { isLoggedin } = require('./middleware/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Swagger
const options = {
    validatorUrl: null,
    oauth: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      appName: 'Predators E-commerce App',
    },
  };
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, false, options));


app.use('/blogs', isLoggedin, blogRouter);
app.use('/', indexRouter);
app.use('/queries', isLoggedin, queryRouter);
app.use('/staff', isLoggedin, staffRouter);
app.use('/apps', isLoggedin, quappRouter);
app.use('/referrals', isLoggedin, referralRouter);
app.use('/users', userRouter);
app.post('/files', upload.single('cv'), (req, res) => {
  console.log(req)
  res.send({success: true})
})


module.exports = app;
