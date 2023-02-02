const userRoute = require('./user.route');
const wordRoute = require('./word.route.js');
const categoryRoute = require('./category.route.js');
const routeManager = (app) => {
    app.use('/word', wordRoute);
    app.use('/category', categoryRoute);
    app.use('/user', userRoute);


    app.all("*", (req, res) => {
        res.status(404).send({
            status: "failed",
            message: "Not Found"
        })
    });

}

module.exports = routeManager;