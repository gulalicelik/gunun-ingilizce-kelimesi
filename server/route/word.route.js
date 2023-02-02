const express = require('express');
const router = express.Router();
const wordController = require('../controller/word.controller.js');
const auth = require('../middleware/auth.js');

router.get('/', auth.checkAuth, wordController.getAllWords)
router.post('/', auth.checkAuth, wordController.createWord)
router.get('/:id', auth.checkAuth, wordController.getWord)
router.put('/:id', auth.checkAuth, wordController.updateWord)
router.delete('/:id', auth.checkAuth, wordController.deleteWord)

module.exports = router;