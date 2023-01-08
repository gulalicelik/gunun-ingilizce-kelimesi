const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const routeManager = require('./route/route.manager.js')
const db = require("./models/index");
const logger = require('./config/logger.js')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

db.sequelize.sync()
    .then(() => {
        console.log("sync db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


routeManager(app)


// error handler
app.use(function (err, req, res, next) {
    logger.error( `request ip address: ${req.ip} -> ${err.message}`);
    res.status(500).send({
        status: "failed",
        message: err.message
    })
});


app.listen(process.env.PORT)