const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const routeManager = require('./route/route.manager.js')
const db = require("./models/index");

const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


routeManager(app)


db.sequelize.sync()
    .then(() => {
        console.log("sync db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.listen(process.env.PORT)