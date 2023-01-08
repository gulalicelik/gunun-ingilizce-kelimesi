const userRoute = require('./user.route');
const wordRoute = require('./word.route.js');
const categoryRoute = require('./category.route.js');
const routeManager = (app) => {
    app.use('/word', wordRoute);
    app.use('/category', categoryRoute);
    app.use('/user', userRoute);


    // 404 handler
    app.use(function (req, res, next) {
        res.status(404).json({
            status: 'fail',
            code  : 404,
            error : `Can't find ${req.originalUrl}`
        });
    });
}

module.exports = routeManager;