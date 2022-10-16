import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World asd')
})

app.listen(process.env.PORT)