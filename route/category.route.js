const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller.js');

router.get('/', categoryController.getAllCategories)
router.post('/', categoryController.createCategory)
router.get('/:id', categoryController.getCategory)
router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router;