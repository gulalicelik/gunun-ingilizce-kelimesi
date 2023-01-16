const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller.js');
const auth = require("../middleware/auth");

router.get('/', auth.checkAuth, categoryController.getAllCategories)
router.post('/', auth.checkAuth, categoryController.createCategory)
router.get('/:id', auth.checkAuth, categoryController.getCategory)
router.put('/:id', auth.checkAuth, categoryController.updateCategory)
router.delete('/:id', auth.checkAuth, categoryController.deleteCategory)

module.exports = router;