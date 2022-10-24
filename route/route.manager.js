const helloRoute = require('./hello.route.js');

const routeManager = (app) => {
    app.use('/hello', helloRoute);
}

module.exports = routeManager;