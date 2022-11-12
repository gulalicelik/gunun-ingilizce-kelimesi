const express = require('express');
const router = express.Router();
const wordController = require('../controller/word.controller.js');

router.get('/', wordController.getAllWords)
router.post('/', wordController.createWord)

module.exports = router;