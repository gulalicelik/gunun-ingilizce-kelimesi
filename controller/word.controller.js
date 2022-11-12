const db = require("../models");
const Word = db.Word;

const getAllWords = (req, res) => {
    Word.findAll().then((words) => {
        res.send(words)
    }).catch((error) => {
        console.error('Unable to get all words : ', error);
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


module.exports = {
    getAllWords,
    createWord

}