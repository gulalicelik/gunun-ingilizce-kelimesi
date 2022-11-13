const express = require('express');
const router = express.Router();
const wordController = require('../controller/word.controller.js');

router.get('/', wordController.getAllWords)
router.post('/', wordController.createWord)
router.get('/:id', wordController.getWord)
router.put('/:id', wordController.updateWord)
router.delete('/:id', wordController.deleteWord)

module.exports = router;