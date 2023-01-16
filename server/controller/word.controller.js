const db = require("../models");
const Word = db.word;

const getAllWords = (req, res) => {
    Word.findAll().then((words) => {
        res.send(words)
    }).catch((error) => {
        console.error('Unable to get all words : ', error);
    });
}
const getWord = (req, res) => {
    Word.findOne({ where: { id: req.params.id } }).then((word) => {
        res.send(word)
    }).catch((error) => {
        console.error('Unable to get word : ', error);
    });
}

const createWord = (req, res) => {

    Word.create({
        word    : req.body.word,
        mean    : req.body.mean,
        category: req.body.category
    }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
}

const updateWord = (req, res) => {
    Word.update({
        word: req.body.word,
        mean: req.body.mean,
        category_id: req.body.category_id,
        sentence_source:req.body.sentence_source,
        sentence_target: req.body.sentence_target,
        usage_video_url: req.body.usage_video_url
    }, { where: { id: req.params.id } }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to update a record : ', error);
    });
}
const deleteWord = (req, res) => {
    Word.destroy({ where: { id: req.params.id } }).then(resp => {
        res.send({
            "status": "success",
            data    : resp
        })
    }).catch((error) => {
        console.error('Failed to delete a record : ', error);
    });
}

module.exports = {
    getAllWords,
    createWord,
    getWord,
    updateWord,
    deleteWord

}