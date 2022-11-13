const db = require("../models");
const Category = db.category;

const getAllCategories = (req, res) => {
    Category.findAll().then((Categorys) => {
        res.send(Categorys)
    }).catch((error) => {
        console.error('Unable to get all Categories : ', error);
    });
}
const getCategory = (req, res) => {
    Category.findOne({ where: { id: req.params.id } }).then((Category) => {
        res.send(Category)
    }).catch((error) => {
        console.error('Unable to get Category : ', error);
    });
}

const createCategory = (req, res) => {

    Category.create({
        category_name: req.body.category_name
    }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

const updateCategory = (req, res) => {
    Category.update({
        category_name: req.body.category_name
    }, { where: { id: req.params.id } }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to update a record : ', error);
    });
}
const deleteCategory = (req, res) => {
    Category.destroy({ where: { id: req.params.id } }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to delete a record : ', error);
    });
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
}