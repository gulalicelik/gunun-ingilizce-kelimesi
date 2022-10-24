const dotenv = require('dotenv')
dotenv.config()
const  express  = require('express')
const app = express()
const routeManager = require('./route/route.manager.js')

routeManager(app)


app.listen(process.env.PORT)