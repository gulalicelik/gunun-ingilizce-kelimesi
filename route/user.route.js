const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller.js');
const validator = require('../utility/validators.js');

router.post('/signin', validator.validateSignIn, userController.signIn);
router.post('/signup', validator.validateSignUp, userController.signUp);

module.exports = router;