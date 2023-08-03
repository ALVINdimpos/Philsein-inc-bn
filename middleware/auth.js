const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const isLoggedin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (err) {
        res.status(401).json({status: 401, message: "You are not authorized to perform this action", error: err})
    }
}

module.exports = {isLoggedin};