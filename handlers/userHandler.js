const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const jwt_options = {
    expiresIn: '7d'
}
const generateToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, jwt_options)
}


const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, saltRounds)
}

const comparePasswords = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}

const createOne = async (req, res) => {
    const uUser = new User({...req.body, password: await hashPassword(req.body.password)});
    uUser.save()
        .then(user => {
            res.status(200).json({status: 200, message: `User ${user.first_name} ${user.last_name} Created Successfully!`});
        })
        .catch(err => {
            res.status(400).json({status: 400, message: "User creation was not successful", error: err});
        })
}


const login = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});
    if (user == null) {
        res.status(400).json({status: 400, message: "User with that email was not found"});
    } else{
        const match = await comparePasswords(req.body.password, user.password)
        if (!match) {
            res.status(400).json({status: 400, message: "The provided password was incorrect"})
        }
        res.status(200).json({status: 200, message: `${user.first_name} Logged In Successfully`, token: generateToken(user.toObject())})
    }
}


module.exports = { createOne, login }