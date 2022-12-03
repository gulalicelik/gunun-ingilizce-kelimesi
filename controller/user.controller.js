const db = require("../models");
const User = db.user;
const bcrypt = require('bcrypt');
const validator = require('../utility/validators.js');

const signUp = async (req, res) => {
    // user signup using email and password bcrypt
    const {firstname, lastname, username, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = {
        firstname,
        lastname,
        username,
        email,
        password: hash
    }

    const [row, created] = await User.findOrCreate({
        where   : {email: user.email},
        defaults: user,
    });
    if (created) {
        res.send({
            "status" : "success",
            "message": "User created successfully",
            data     : row
        })
        return;
    }
    res.send({
        "status" : "error",
        "message": "User already exists",
        "email"   : row.email,
    })
}

const signIn = async (req, res) => {
    // user signin using email and password bcrypt
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (user) {
        const validPassword = bcrypt.compareSync(password, user.password);
        if (validPassword) {
            res.send({
                "status" : "success",
                "message": "User logged in successfully",
                data     : user
            })
            return;
        }
    }
    res.send({
        "status" : "error",
        "message": "Invalid email or password",
    })
}

module.exports = {
    signUp,
    signIn
}