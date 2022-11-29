const db = require("../models");
const User = db.user;
const bcrypt = require('bcrypt');


const signup = async (req, res) => {

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

module.exports = {
    signup
}