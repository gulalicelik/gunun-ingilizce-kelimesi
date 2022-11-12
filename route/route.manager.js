
const wordRoute = require('./word.route.js');
const routeManager = (app) => {
    app.use('/word', wordRoute);
}

module.exports = routeManager;