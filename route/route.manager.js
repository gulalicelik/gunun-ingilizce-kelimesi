
const wordRoute = require('./word.route.js');
const categoryRoute = require('./category.route.js');
const routeManager = (app) => {
    app.use('/word', wordRoute);
    app.use('/category', categoryRoute);
}

module.exports = routeManager;